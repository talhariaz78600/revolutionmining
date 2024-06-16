import React from 'react';

const Orderstatus = () => {
    return (
        <div>
            <div class="orders-list">
                <table role="table" class="order-history small-hide">
                    <caption class="visually-hidden">
                        Order history
                    </caption>
                    <thead role="rowgroup">
                        <tr role="row">
                            <th id="ColumnDate" scope="col" role="columnheader"><center>Order Date</center></th>
                            <th id="ColumnFacility" scope="col" role="columnheader">Facility</th>
                            <th id="ColumnMachine" scope="col" role="columnheader">Machine</th>
                            <th id="ColumnQuantity" scope="col" role="columnheader">Quantity<br/></th>
                            <th id="ColumnPower" scope="col" role="columnheader">
                                <center>
                                    Power<br/>
                                        <small>(Watts)</small>
                                </center>
                            </th>
                            <th id="ColumnHostingPrice" scope="col" role="columnheader"><center>Hashrate</center></th>
                            <th id="ColumnTotal" scope="col" role="columnheader"><center>Monthly Hosting Fee</center></th>
                            <th id="ColumnMiningDate" scope="col" role="columnheader"><center>Target Online Date</center></th>
                        </tr>
                    </thead>
                    <tbody role="rowgroup"><tr role="row">
                        <td class="nowrap">2024-06-16</td>







                        <td>Texas, United States</td>
                        <td>Antminer S21 200 TH</td>
                        <td>1</td>
                        <td>3500.0</td>
                        <td>200 TH/s</td>
                        <td>$180</td>
                        <td>July 2024</td>
                    </tr>
                        <tr>
                            <td colspan="8" className='text-left'>
                                <div class="order-progress">
                                    <div class="step active">Pending</div>
                                    <div class="step">In transit</div>
                                    <div class="step">At Facility</div>
                                    <div class="step">
                                        Live!
                                    </div>
                                </div>
                                Order Number: #1473
                            </td>
                        </tr></tbody>
                </table>
                <div class="order-history lg:hidden"><div class="single-order">
                    <div class="">Work Numbers: #1473</div><div class="" >
                        <div class="order-progress">
                            <div class="step active">Pending</div>
                            <div class="step">In transit</div>
                            <div class="step">At Facility</div>
                            <div class="step">Live!</div>
                        </div>
                        <ul>
                            <li><span>Order Date:</span> 2024-06-16</li>
                            <li><span>Facility:</span> Texas, United States</li>
                            <li><span>Machine Name(s):</span> Antminer S21 200 TH</li>
                            <li><span>Quantity:</span> 1</li>
                            <li><span>Power(kW):</span> 3500.0</li>
                            <li><span>Hosting Price(Per kWh):</span> 200 TH/s</li>
                            <li><span>Monthly Fee:</span> 5,545</li>
                            <li><span>Target Mining Date:</span> 2024-06-16</li>
                        </ul>
                    </div>
                </div></div>
            </div>
        </div>
    );
}

export default Orderstatus;
