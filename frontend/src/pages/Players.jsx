// src/components/Players.js
import React, { useState, useEffect } from 'react';
import { getPlayers } from '../api';

function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers().then((response) => setPlayers
