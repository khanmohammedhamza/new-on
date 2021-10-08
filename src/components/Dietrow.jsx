import { DataTable } from 'react-native-paper';
import React from 'react'
const Dietrow = ({diet}) => {
  const total = diet.water + diet.energ_kcal
  
    return (
      <DataTable.Row>
          <DataTable.Cell >{diet.name}</DataTable.Cell>
          <DataTable.Cell numeric>{diet.water}</DataTable.Cell>
          <DataTable.Cell numeric>{diet.energ_kcal}</DataTable.Cell>
          <DataTable.Cell numeric>{ total}</DataTable.Cell>
          </DataTable.Row>

          
    )
  }

export default Dietrow;   