import { Card, CardBody, CardFooter, CardHead, Cards } from "@/components/Cards/CardIndex";


import './table.css'
/*  ระบบ ตรวจสอบจำนวน leng data สร้างจำนวน page ที่สามารถ get 2 หน้าแสดงที่ล่ะหน้า
โจทย์ คือ แบ่ง page page ล่ะ 10 data
*/ 
export default function GridTablePage() {


    return (




        <Cards className='p-2 lg:w-[70vw] w-[100vw] md:px-10' >
            <CardHead className=' p-3' >
                Table
            </CardHead>
            <CardBody className='p-2  '>
                <div className=" fix-width    " >


                    <table className="table table-striped w-[100%]">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                <th>#</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <th>1</th>
                                <th>The sentance starts here</th>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <th>2</th>
                                <th>The sentance starts here</th>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <th>3</th>
                                <th>The sentance starts here</th>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>David</td>
                                <td>Bullock</td>
                                <td>@serkai</td>
                                <th>4</th>
                                <th>The sentance starts here</th>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <th>5</th>
                                <th>The sentance starts here</th>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <th>6</th>
                                <th>The sentance starts here</th>
                            </tr>
                        </tbody>
                    </table>


                </div>
            </CardBody>
            <CardFooter>
                <span className=" gap-3 textNav md:flex hidden cursor-pointer p-3">
                    <div>{'<<'} </div>
                    <div>{'<'} </div>
                    <span className="flex gap-3 xs:gap-0" >

                        <div> 1  </div>
                        <div>2 </div>
                        <div> 3</div>
                    </span>
                    <div>{'>>'} </div>
                    <div>{'>'} </div>

                </span>
            </CardFooter>
        </Cards>



    );
}
