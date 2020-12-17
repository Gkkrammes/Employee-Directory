import React, { Component } from "react";
import TableHeader from "./components/TableHeader"
import DataTable from "./components/DataTable";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from './components/employees.json';
import './App.css';


class App extends Component {
  state = {
    employees
  };

  sortByHeading = heading => {
    if(isNaN(employees[0][heading])){
      let employeeSorted = employees.sort((a,b) => {
        if(a[heading] < b[heading]) { return -1; }
        if(a[heading] > b[heading]) { return 1; }
        return 0;
      });
      this.setState({ employeeSorted });      
    }else{
      let employeeSorted = employees.sort((a, b) => {
        return b[heading] - a[heading]; 
      });
      this.setState({ employees:  employeeSorted });
    }
  }

  filter = filter => {
      let employeeFiltered = employees.filter(employee => employee.role === filter);
      this.setState({ employees: employeeFiltered });
  }


  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <table><tbody>
          <TableHeader
            sortByHeading={this.sortByHeading}
          />
          
          {this.state.employees.map(employee => (
              <DataTable
                id={employee.id}
                name={employee.name}
                role={employee.role}
                episodes={employee.episodes}
                department={employee.department}
                key={employee.primarykey}
                filter={this.filter}
              />
            ))}
        </tbody></table>
      </Wrapper>
    );
  }
}

export default App;