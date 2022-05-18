import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Box, Button, ButtonGroup, Typography, InputLabel, FormHelperText, InputLabelProps, TextField, FormControl, Select, Chip } from '@mui/material'


function BrandAssessment() {

  const store = useSelector((store) => store);

  const [heading, setHeading] = useState('Functional Component');

  return (
    <div>
      <h2>{heading}</h2>
    </div>
  );
}

export default BrandAssessment;
