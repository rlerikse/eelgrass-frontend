import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import {Calendar} from 'primereact/calendar';

import logo from './masbays.png';
import './App.css';
import './TripInfo.css';

export class TripInfo extends Component {
  constructor() {
      super();

      let today = new Date();
      let month = today.getMonth();
      let year = today.getFullYear();
      let prevMonth = (month === 0) ? 11 : month - 1;
      let prevYear = (prevMonth === 11) ? year - 1 : year;
      let nextMonth = (month === 11) ? 0 : month + 1;
      let nextYear = (nextMonth === 0) ? year + 1 : year;

      let minDate = new Date();
      minDate.setMonth(prevMonth);
      minDate.setFullYear(prevYear);
      let maxDate = new Date();
      maxDate.setMonth(nextMonth);
      maxDate.setFullYear(nextYear);
      this.state = {
          crewmembers: '',
          date: [today],
          harbor: '',
          boatname: '',

      };

      this.dateTemplate = this.dateTemplate.bind(this);
  }

  dateTemplate(date) {
      if (date.day > 10 && date.day < 15) {
          return (
              <div style={{backgroundColor: '#1dcbb3', color: '#ffffff', fontWeight: 'bold', borderRadius: '50%', width: '2em', height: '2em', lineHeight: '2em', padding: 0}}>{date.day}</div>
          );
      }
      else {
          return date.day;
      }
  }

  render() {
        return (
            <div className="App-header">
                        <span className="p-float-label">
                            <InputText id="float-input" type="text" size="100" value={this.state.crewmembers} onChange={(e) => this.setState({crewmembers: e.target.value})} />
                            <label htmlFor="float-input">Initials of Crew Members (Seperated by comma)</label>
                        </span>
                        <div className="p-col-12 p-md-4">
                            <Calendar value={this.state.date} size="100" onChange={(e) => this.setState({date: e.value})} dateTemplate={this.dateTemplate} />
                        </div>
                        <span className="p-float-label">
                            <InputText id="float-input" type="text" size="100" value={this.state.harbor} onChange={(e) => this.setState({harbor: e.target.value})} />
                            <label htmlFor="float-input">Harbor</label>
                        </span>
                        <span className="p-float-label">
                            <InputText id="float-input" type="text" size="100" value={this.state.harbor} onChange={(e) => this.setState({harbor: e.target.value})} />
                            <label htmlFor="float-input">BoatName</label>
                        </span>
                        <Link to="/landing">
                          <Button label="Save Trip" className="p-button-raised p-button-success" />
                        </Link>
            </div>
        )
    }
}

export default TripInfo;
