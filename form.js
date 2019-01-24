class InputFields extends React.Component {
  constructor(props) {
    super(props);
    }
      render() {

          return (
            <div className="main-block row">
            {
              this.props.cats.map((val, idx) => {
                let mId = `m-${idx}`, tId = `t-${idx}`, wId = `w-${idx}`, thId = `th-${idx}`, fId = `f-${idx}`
                return <div className="inner-block col-md-4">
                        <div className="col-md-12">
                          <div className="box-header">
                            <span>Week {idx + 1}</span>
                          </div>
                          <div className="input-control">
                          <label className="inline-block col-md-8 col-sm-8 col-xs-12" htmlFor={mId}>Monday</label>
                          <input type="text" name={mId} data-id={idx} id={mId}
                          value={this.props.cats[idx].monday} 
                          className="text-field col-md-4 col-sm-4 col-xs-12" data-field="monday" />
                          <label className="inline-block col-md-8 col-sm-8 col-xs-12" htmlFor={tId}>Tuesday</label>
                          <input type="text" name={tId} data-id={idx} id={tId} 
                          value={this.props.cats[idx].tuesday} 
                            className="text-field col-md-4 col-sm-4 col-xs-12" data-field="tuesday"/>
                          <label className="inline-block col-md-8 col-sm-8 col-xs-12" htmlFor={wId}>Wednesday</label>
                          <input type="text" name={wId} data-id={idx} id={wId} 
                          value={this.props.cats[idx].wednesday} 
                            className="text-field col-md-4 col-sm-4 col-xs-12" data-field="wednesday"/>
                          <label className="inline-block col-md-8 col-sm-8 col-xs-12" htmlFor={thId}>Thursday</label>
                          <input type="text" name={thId} data-id={idx} id={thId} 
                          value={this.props.cats[idx].thursday} 
                            className="text-field col-md-4 col-sm-4 col-xs-12" data-field="thursday"/> 
                          <label className="inline-block col-md-8 col-sm-8 col-xs-12" htmlFor={fId}>Friday</label>
                          <input type="text" name={fId} data-id={idx} id={fId} 
                          value={this.props.cats[idx].friday} 
                            className="text-field col-md-4 col-sm-4 col-xs-12" data-field="friday"/>
                          </div> 
                        </div> 
                </div>
              })
            }
              
            </div>
          )
   }
}

class Reservation extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
        cats: [{
          monday: 1,
          tuesday: 2,
          wednesday: 3,
          thursday: 4,
          friday: 5
          },{
            monday: 20,
            tuesday: 12,
            wednesday: 23,
            thursday: 54,
            friday: 25
            }]
      };
      this.handleSubmit = this.handleSubmit.bind(this);
   }


    handleSubmit(event) {
      alert('A name was submitted: ' + JSON.stringify(this.state));
      event.preventDefault();
    }

    handleChange = (e) => {
      if (["text-field"].includes(e.target.className) ) {
        let cats = [...this.state.cats]
        cats[e.target.dataset.id][e.target.dataset.field] = e.target.value
        this.setState({ cats }, () => console.log(this.state.cats))
      } else {
        this.setState({ [e.target.name]: e.target.value.toUpperCase() })
      }
    }

    addCat = (e) => {
      this.setState((prevState) => ({
        summary: "sdasd",
        cats: [...prevState.cats, {
          monday: "",
          tuesday: "",
          wednesday: "",
          thursday: 4,
          friday: 5
          }],
      }));
    }
 
   render() {
    let {cats} = this.state
     return (
      <div>
        <div className="text-right">
          <button onClick={this.addCat} type="button" className="btn btn-primary">Add new wizard</button>
        </div>
        <div className="form-container">
          <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
            <InputFields cats={cats}/>
            <div className="col-md-12 pad-0 summary-block">
              <div className="label">
                <label>Comment:</label>
              </div>
              <textarea name="summary" value={this.state.summary} />
            </div>
            <input type="submit" className="btn btn-success" value="Submit Changes" />
          </form>
        </div>
      </div>
     );
   }
 }

ReactDOM.render(<Reservation />, document.getElementById('app'));