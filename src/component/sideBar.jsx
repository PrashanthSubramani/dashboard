function SideBarComponent(){
    return (
        <div className="col-md-2 sidebar-container">
                <h3 className="text-center mt-5 text-primary">Medico Sales</h3>
                <div className="nav flex-column nav-pills mt-5" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                    <a className="nav-link active" id="v-pills-dashboard-tab" data-toggle="pill" href="#v-pills-dashboard"
                        role="tab" aria-controls="v-pills-dashboard" aria-selected="true"><i className="fa fa-th-large"
                            style={{ fontSize: '20px' }}></i> &nbsp;&nbsp; Dashboard</a>

                    <a className="nav-link" id="v-pills-lab-test-tab" data-toggle="pill" href="#v-pills-lab-test" role="tab"
                        aria-controls="v-pills-lab-test" aria-selected="false"><i className="fa fa-check-square-o"
                            style={{ fontSize: '20px' }}></i>&nbsp;&nbsp; Lab Test</a>

                    <a className="nav-link" id="v-pills-appointment-tab" data-toggle="pill" href="#v-pills-appointment"
                        role="tab" aria-controls="v-pills-appointment" aria-selected="false"><i className="fa fa-calendar"
                            style={{ fontSize: '20px' }}></i>&nbsp;&nbsp; Appointment</a>

                    <a className="nav-link" id="v-pills-medicine-order-tab" data-toggle="pill"
                        href="#v-pills-medicine-order" role="tab" aria-controls="v-pills-medicine-order"
                        aria-selected="false"><i className="fa fa-medkit" style={{ fontSize: '20px' }}></i>&nbsp;&nbsp; Medicine
                        Order</a>
                </div>
        </div>
    );
}

export default SideBarComponent;
