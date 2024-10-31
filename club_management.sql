

-- Create the database
CREATE DATABASE club_management;
USE club_management;

-- Create Team table first, as Player references it
CREATE TABLE Team (
    team_id INT AUTO_INCREMENT PRIMARY KEY,
    team_name VARCHAR(50) NOT NULL,
    formation VARCHAR(50)
);

-- Create Venue table first, as Matches references it
CREATE TABLE Venue (
    venue_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(100),
    capacity INT
);

-- Create User table with user_type for differentiating roles
CREATE TABLE User (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    gender ENUM('Male', 'Female', 'Other'),
    nationality VARCHAR(50),
    age INT,
    user_type ENUM('Player', 'Coach', 'Staff') NOT NULL
);

-- Create Player table for player-specific attributes
CREATE TABLE Player (
    player_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    team_id INT,
    contract_start_date DATE,
    contract_end_date DATE,
    training_history TEXT,
    performance_metrics TEXT,
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (team_id) REFERENCES Team(team_id)
);

-- Create Coach table for coach-specific attributes
CREATE TABLE Coach (
    coach_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    experience INT,
    certification_level VARCHAR(50),
    coaching_style TEXT,
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

-- Create Staff table for staff-specific attributes
CREATE TABLE Staff (
    staff_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    assigned_tasks TEXT,
    performance_rating FLOAT,
    staff_role ENUM('Ground staff', 'Administration staff'),
    department VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

-- Create Matches table with team references for home and away teams
CREATE TABLE Matches (
    match_id INT AUTO_INCREMENT PRIMARY KEY,
    date DATE,
    time TIME,
    home_team_id INT,
    away_team_id INT,
    result VARCHAR(50),
    venue_id INT,
    FOREIGN KEY (home_team_id) REFERENCES Team(team_id),
    FOREIGN KEY (away_team_id) REFERENCES Team(team_id),
    FOREIGN KEY (venue_id) REFERENCES Venue(venue_id)
);

-- Create Merchandise table
CREATE TABLE Merchandise (
    merch_id INT AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2),
    available_quantity INT,
    sales_history TEXT
);

-- Create Finances table
CREATE TABLE Finances (
    finance_id INT AUTO_INCREMENT PRIMARY KEY,
    type ENUM('Income', 'Expense') NOT NULL,
    amount DECIMAL(15, 2),
    description TEXT,
    date DATE
);

-- Create Player_Match table for tracking player participation in matches
CREATE TABLE Player_Match (
    player_id INT,
    match_id INT,
    PRIMARY KEY (player_id, match_id),
    FOREIGN KEY (player_id) REFERENCES Player(player_id),
    FOREIGN KEY (match_id) REFERENCES Matches(match_id)
);

-- Insert sample data into Team table
INSERT INTO Team (team_name, formation) VALUES
('Tigers', '4-3-3'),
('Wolves', '3-5-2'),
('Eagles', '4-4-2');

-- Insert sample data into Venue table
INSERT INTO Venue (name, location, capacity) VALUES
('Stadium A', 'City Center', 50000),
('Stadium B', 'Northside', 30000),
('Stadium C', 'Southside', 45000);

-- Insert sample data into User table
INSERT INTO User (username, password, gender, nationality, age, user_type) VALUES
('john_doe', 'password123', 'Male', 'USA', 25, 'Player'),
('jane_coach', 'securepass', 'Female', 'Canada', 40, 'Coach'),
('michael_staff', 'passstaff', 'Male', 'UK', 30, 'Staff'),
('alex_player', 'mypassword', 'Other', 'South Korea', 22, 'Player'),
('emily_admin', 'adminpass', 'Female', 'Australia', 35, 'Staff');

-- Insert sample data into Player table
INSERT INTO Player (user_id, team_id, contract_start_date, contract_end_date, training_history, performance_metrics) VALUES
(1, 1, '2023-01-01', '2025-12-31', 'No major injuries, strong in defense.', 'High speed, excellent defense'),
(4, 2, '2022-06-15', '2024-06-14', 'Great striker, consistent performance', 'Top scorer in team');

-- Insert sample data into Coach table
INSERT INTO Coach (user_id, experience, certification_level, coaching_style) VALUES
(2, 15, 'A-License', 'Offensive and strategic');

-- Insert sample data into Staff table
INSERT INTO Staff (user_id, assigned_tasks, performance_rating, staff_role, department) VALUES
(3, 'Equipment management, logistics', 4.5, 'Ground staff', 'Operations'),
(5, 'Handling finances and scheduling', 4.8, 'Administration staff', 'Finance');

-- Insert sample data into Matches table
INSERT INTO Matches (date, time, home_team_id, away_team_id, result, venue_id) VALUES
('2023-10-20', '15:00:00', 1, 2, 'Win', 1),
('2023-10-22', '18:30:00', 2, 3, 'Draw', 2),
('2023-10-25', '20:00:00', 1, 3, 'Loss', 3);

-- Insert sample data into Merchandise table
INSERT INTO Merchandise (item_name, price, available_quantity, sales_history) VALUES
('Team Jersey', 49.99, 200, 'Sold 150 units last month'),
('Cap', 19.99, 150, 'Sold 100 units last week'),
('Scarf', 14.99, 300, 'Steady sales over the season');

-- Insert sample data into Finances table
INSERT INTO Finances (type, amount, description, date) VALUES
('Income', 5000.00, 'Ticket sales for match against Lions', '2023-10-20'),
('Expense', 200.00, 'Equipment purchase', '2023-10-18'),
('Income', 1000.00, 'Merchandise sales', '2023-10-15');

-- Insert sample data into Player_Match table
INSERT INTO Player_Match (player_id, match_id) VALUES
(1, 1), -- Player 1 played in Match 1
(1, 2), -- Player 1 also played in Match 2
(4, 3); -- Player 4 played in Match 3

-- Verification Queries
-- Display all users with their types
SELECT * FROM User;

-- Retrieve players with their team details
SELECT u.username AS player_name, p.player_id, t.team_name, p.contract_start_date, p.contract_end_date
FROM Player p
JOIN Team t ON p.team_id = t.team_id
JOIN User u ON p.user_id = u.user_id;

-- Retrieve coaches and their experience levels
SELECT u.username AS coach_name, c.experience, c.certification_level, c.coaching_style
FROM Coach c
JOIN User u ON c.user_id = u.user_id;

-- Retrieve staff details with roles
SELECT u.username AS staff_name, s.assigned_tasks, s.performance_rating, s.staff_role, s.department
FROM Staff s
JOIN User u ON s.user_id = u.user_id;
