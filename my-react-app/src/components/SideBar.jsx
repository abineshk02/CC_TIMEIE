import { NavItems } from "./NavItems"


export const Sidebar = ({}) => {
    return (
        <>
            <div className="container-3">
                <NavItems  classname1={'group-218'} 
                classname2={'group-218'} 
                classname3={'document-1'} 
                classname4={'notice'} 
                buttonclass={'sidebar-button'} 
                srcPath={"assets/vectors/Category59_x2.svg"} 
                content={'Dashboard'}/>
<NavItems  classname1={'group-222'} 
                classname2={'group-222'} 
                classname3={'document-1'} 
                classname4={'notice'} 
                buttonclass={'sidebar-button'} 
                srcPath={"assets/vectors/Document58_x2.svg"}
                content={'Notice'}/>
              <NavItems  classname1={'group-222'} 
                classname2={'group-222'} 
                classname3={'document-1'} 
                classname4={'notice'} 
                buttonclass={'sidebar-button'} 
                srcPath={"assets/vectors/Folder49_x2.svg"}
                content={'Access/Asset'}/>
               
                <div className="group-224">
                    <img className="folder" src="assets/vectors/Folder49_x2.svg" />
                    <span className="salary-slip-1">
                        <button type="button" className="sidebar-button">
                            Access/Asset
                        </button>

                    </span>
                </div>
                <div className="group-225">
                    <div className="ticket">
                        <div className="group-219">
                            <img className="stroke-13" src="assets/vectors/Stroke11_x2.svg" />
                            <img className="stroke-6" src="assets/vectors/Stroke643_x2.svg" />
                            <img className="stroke-33" src="assets/vectors/Stroke3_x2.svg" />
                        </div>
                        <img className="ticket-1" src="assets/vectors/Ticket29_x2.svg" />
                    </div>
                    <span className="salary-slip-1">
                        <button type="button" className="sidebar-button">
                            Salary Slip
                        </button>
                    </span>
                </div>
                <div className="container">
                    <div className="group-260">
                        <img className="document" src="assets/vectors/Document14_x2.svg" />
                    </div>
                    <div className="group-256">
                        <span className="attendance">
                            <button type="button" className="sidebar-button">
                                Attendance
                            </button>
                        </span>
                    </div>
                </div>
                <div className="group-249">
                    <span className="holiday">
                        <img className="ticket-star" src="assets/vectors/TicketStar13_x2.svg" />
                    </span>
                    <span>
                        <button type="button" className="sidebar-button">
                            Holiday
                        </button>

                    </span>
                </div>
                <div className="group-255">
                    <div className="profile">
                        <div className="ellipse-736">
                        </div>
                        <img className="path-33945" src="assets/vectors/Path3394511_x2.svg" />
                    </div>
                    <div className="group-250">
                        <span className="employee-detail">
                            <button type="button" className="sidebar-button">
                                Employee detail
                            </button>

                        </span>
                    </div>
                </div>
                <div className="group-258">
                    <div className="calendar">
                        <img className="calendar-1" src="assets/vectors/Calendar84_x2.svg" />
                    </div>
                    <div className="group-251">
                        <span className="calender">
                            <button type="button" className="sidebar-button">
                                Calender
                            </button>

                        </span>
                    </div>
                </div>
                <div className="group-257">
                    <img className="paper-negative" src="assets/vectors/PaperNegative13_x2.svg" />
                    <div className="group-252">
                        <span className="resign">

                            Resign
                        </span>
                    </div>
                </div>
                <div className="group-217">
                    <div className="group-211">
                        <img className="vector" src="assets/vectors/Vector373_x2.svg" />
                        <div className="group-9">
                            <span className="logout">
                                Logout
                            </span>
                        </div>
                    </div>
                    <div className="group-216">
                        <div className="group-144">
                            <span className="collape">
                                Collape
                            </span>
                        </div>
                        <div className="group-210">
                            <img className="vector-401" src="assets/vectors/Vector40143_x2.svg" />
                            <img className="vector-402" src="assets/vectors/Vector40220_x2.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}