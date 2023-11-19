function tableData({data}){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">
              <input type="checkbox" />
            </th>
            <th scope="col">Invoice Id</th>
            <th scope="col">Date</th>
            <th scope="col">Customer</th>
            <th scope="col">Payable Amount</th>
            <th scope="col">Paid Amount</th>
            <th scope="col">Due</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th scope="row">
                <input type="checkbox" />
              </th>
              <td>
                <a href="javascript::void(0);" className="text-primary">
                  {item.invoice_id}
                </a>
              </td>
              <td>{item.date}</td>
              <td>{item.customer}</td>
              <td>{item.payable_amount}</td>
              <td>{item.paid_amount}</td>
              <td>{item.due}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}

export default tableData;