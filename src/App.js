import logo from './logo.svg';
import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SideBarComponent from './component/sideBar';
import TableData from './component/tableData';


const initialData = [
    {
        id: '1',
        invoice_id : '#AHGA68',
        date: '23/09/2023',
        customer : 'Ajith Kumar',
        payable_amount : '$100',
        paid_amount : '$000',
        due : '$000'
    },
    {
        id: '2',
        invoice_id : '#AHGA69',
        date: '23/09/2023',
        customer : 'Vijay',
        payable_amount : '$100',
        paid_amount : '$000',
        due : '$000'
    },
    {
        id: '3',
        invoice_id : '#AHGA67',
        date: '23/09/2023',
        customer : 'Sj Suriya',
        payable_amount : '$100',
        paid_amount : '$000',
        due : '$000'
    },
    {
        id: '4',
        invoice_id : '#AHGA610',
        date: '23/09/2023',
        customer : 'Rajinikanth',
        payable_amount : '$100',
        paid_amount : '$000',
        due : '$000'
    },

];




function App() {

    const [dataList, setDataList] = React.useState(initialData);
  return (
    <div className="App">
        <div className="container-fluid">
            <div className="row">

            <SideBarComponent></SideBarComponent>
        
                <div className="col-md-10">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-dashboard" role="tabpanel"
                            aria-labelledby="v-pills-dashboard-tab">
                            <div className="container-fluid">
                                <div className="d-flex mt-4">
                                    <div className="mr-auto">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                              <span className="input-group-text" id="basic-addon1">
                                                <i className="fa fa-search"></i>
                                              </span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Search" aria-label="search" aria-describedby="basic-addon1"/>
                                          </div>
                                    </div>
                                    <div className="ml-auto">
                                        <button className="btn btn-secondary"><i className="fa fa-bell"></i></button>
                                    </div>

                                  </div>

                                  <div className="col-md-12">
                                    <h2>Sales Information</h2>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <label for="">Customer</label>
                                            <input type="text" className="form-control" placeholder="Customer"/>
                                        </div>

                                        <div className="col-md-3">
                                            <label for="">InvoiceId</label>
                                            <input type="text"  className="form-control" placeholder="InvoiceID"/>
                                        </div>


                                        <div className="col-md-3">
                                            <label for="">start Date</label>
                                            <input type="date"  className="form-control" placeholder="customer"/>
                                        </div>

                                        <div className="col-md-3">
                                            <label for="">End Date</label>
                                            <input type="date"  className="form-control" placeholder="customer"/>
                                        </div>
                                        
                                    </div>
                                  </div>

                                  <div className="col-md-12 mt-3">
                                    <div className="card">
                                        <div className="card-body">
                                                <TableData data={initialData} />
                                        </div>
                                      </div>
                                  </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="v-pills-lab-test" role="tabpanel" aria-labelledby="v-pills-lab-test-tab">
                            Profile Page</div>

                        <div className="tab-pane fade" id="v-pills-appointment" role="tabpanel"
                            aria-labelledby="v-pills-appointment-tab">Message Page</div>

                        <div className="tab-pane fade" id="v-pills-medicine-order" role="tabpanel"
                            aria-labelledby="v-pills-medicine-order-tab">Settings Page</div>
                            
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
