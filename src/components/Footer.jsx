import React from 'react'

const Footer = () => {
    return (
        <section id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className='copyright text-center'>
                            <p className='mb-lg-0 mb-2'>Copyright ©  2023 <span style={{ color: "#ecbf4f" }}>Adeel</span>. All Rights Reserved.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='design text-center'>
                            <p className='m-0'>Designed by <span style={{ color: "#ecbf4f", textDecoration: "underline" }} >Adeel Naveed</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
