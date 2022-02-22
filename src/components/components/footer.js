import React from 'react';
import { Link } from '@reach/router';

const footer= () => (
  <footer className="footer-light">
            <div className="container">
                <div className="row">
                    <div className="">

                    </div>
                     <div className="col-md-6 col-sm-6 col-xs-1">
                        <div className="widget widgetcard">
                            <h3>Add your email to receive news and announcements</h3>
                            
                            <form action="https://www.getdrip.com/forms/598512062/submissions" method="post" data-drip-embedded-form="598512062" id="drip-ef-598512062">
                                <div data-drip-attribute="description"></div>
                                <div style={{display: "none"}} aria-hidden="true">
                                <label for="website">Website</label><br />
                                <input type="text" id="website" name="website" tabindex="-1" autocomplete="false" value="" />
                                </div>
                                <input type="hidden" name="tags[]" id="tags_" value="NFT_labs" tabindex="-1" />


                                <div>
                                <div>
                                    <input type="email" id="drip-email" name="fields[email]" defaultValue="" placeholder="Your email address" style={{border: "none",fontSize: "1.6em",fontWeight: "bold",color: "black", background: "transparent"}} />
                                </div>

                                <input className="submitbutton" type="submit" value="Subscribe" data-drip-attribute="sign-up-button" style={{background: "linear-gradient(90deg, rgba(240, 188, 88, 0.15) -0.02%, rgba(221, 108, 153, 0.15) 100%)", border: "1px solid #000", color: "black", borderRadius: "32px", padding: "12px 24px", width: "124px", margin: "12px", cursor: "pointer",}} />

                                </div>
                            </form>
                        </div>
                    </div>
                    {/*
                    <div className="col-md-3 col-sm-6 col-xs-1">
                        <div className="widget">
                            <h5>Resources</h5>
                            <ul>
                                <li><Link to="">Help Center</Link></li>
                                <li><Link to="">Partners</Link></li>
                                <li><Link to="">Suggestions</Link></li>
                                <li><Link to="">Discord</Link></li>
                                <li><Link to="">Docs</Link></li>
                                <li><Link to="">Newsletter</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-1">
                        <div className="widget">
                            <h5>Community</h5>
                            <ul>
                                <li><Link to="">Community</Link></li>
                                <li><Link to="">Documentation</Link></li>
                                <li><Link to="">Brand Assets</Link></li>
                                <li><Link to="">Blog</Link></li>
                                <li><Link to="">Forum</Link></li>
                                <li><Link to="">Mailing List</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-1">
                        <div className="widget">
                            <h5>Newsletter</h5>
                            <p>Signup for our newsletter to get the latest news in your inbox.</p>
                            <form action="#" className="row form-dark" id="form_subscribe" method="post" name="form_subscribe">
                                <div className="col text-center">
                                    <input className="form-control" id="txt_subscribe" name="txt_subscribe" placeholder="enter your email" type="text" /> 
                                    <Link to="" id="btn-subscribe">
                                      <i className="arrow_right bg-color-secondary"></i>
                                    </Link>
                                    <div className="clearfix"></div>
                                </div>
                            </form>
                            <div className="spacer-10"></div>
                            <small>Your email is safe with us. We don't spam.</small>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="subfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="de-flex">
                                <div className="de-flex-col">
                                    <span onClick={()=> window.open("", "_self")}>
                                        <img alt="" className="f-logo d-1" src="./img/logo-light.png" />
                                        {/* <img alt="" className="f-logo d-3" src="./img/logo-2-light.png" />
                                        <img alt="" className="f-logo d-4" src="./img/logo-3.png" /> */}
                                        <span className="copy" style={{ color: "white"}}>&copy; Copyright 2021 - Invictus NFT Lab by <a style={{ color: "white", fontWeight: "bold", cursor: "pointer"}} href="https://invictuscapital.com/en/" target="_blank">Invictus Capital</a></span>
                                    </span>
                                </div>
                                <div className="de-flex-col">
                                    <div className="social-icons">
                                    <span onClick={()=> window.open("https://www.facebook.com/invictusnftlabs", "_blank")}><i className="fa fa-facebook fa-lg"></i></span>
                                    <span onClick={()=> window.open("https://twitter.com/ic_NFT_Lab", "_blank")}><i className="fa fa-twitter fa-lg"></i></span> 
                                    <span onClick={()=> window.open("https://ic-nft-lab.medium.com/", "_blank")}><i className="fa fa-medium fa-lg"></i></span>
                                    <span onClick={()=> window.open("https://www.instagram.com/ic_nft_lab/", "_blank")}><i className="fa fa-instagram fa-lg"></i></span>
                                    <span onClick={()=> window.open("https://discord.gg/RG3r7VR44c", "_blank")}><i className="fab fa-discord fa-lg"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
);
export default footer;