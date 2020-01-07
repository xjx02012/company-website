import * as React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Layout from '../../components/Layout'
import '../../styles/theme/about.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { fun1 } from '../about/map'
<script type="text/babel"  src="http://api.map.baidu.com/api?v=3.0&ak=NeNEy66Cv0crzs3ktX7dLMgzzOfhZugv"></script>





const AboutPage: React.FunctionComponent = () => (
  <Layout title="About | Next.js + TypeScript Example" >

    <img className="img-fluid" src={`/images/banner/dabbyTeam.png`} />

    <div className="about">
      <Tabs>
        <div style={{ background: "#edf4fa" }}>
          <div className="wrapper">
            <div className="container-xl">
              <TabList className='tab-box'>
                <Tab className='tab'>团队简介</Tab>
                <Tab className='tab'>联系我们</Tab>
                <Tab className='tab'>加入我们</Tab>
              </TabList>

              <TabPanel>
                {/* 团队简介 */}
                <Row className='summary'>
                  <Col md={6}>
                    <h3>简介</h3>
                    <h4>BRIEF INTRODUCTION</h4>
                    <p className='txt'>
                      广州大白互联网科技有限公司创设于2015年5月12日，
                      总部坐落在美丽的广州南沙自贸区。公司是一家以互联网公共服务与基础服务提供为主营业务的高科技企业，
                      具体业务内容包括互联网政务警务平台、身份认证平台建设与运营、互联网开放平台二次深度开发、智能硬件设备研发、
                      生产与销售以及互联网移动支付通道搭建。公司立足于“互联网+政务”、“互联网+警务”、“互联网+身份认证”等前沿领域，
                      凭借出色的研发实力与先进的服务理念，精心打造移动警务便民服务、财税移动征缴服务、可信身份认证服务等多条产品线，
                      为公共服务供应方与行业应用提供多方位的基础支持，助推用户激发业务发展新动力。
                    </p>
                  </Col>
                  <Col md={6}>
                    <img className='img-fluid' src={`/images/about/dabbyPic.png`} alt='图片加载失败' />
                  </Col>
                </Row>
                <div className='team'>
                  {/* 公司理念 */}
                  <div className='concept'>
                    <div className="title">
                      <i className="title-line"></i>
                      <span>公司理念</span>
                      <i className="title-line"></i>
                    </div>
                    <p className="title-en">COMPANY CONCEPTS</p>

                    <div className='discountlcon'>
                      <p style={{ padding: "67px" }}>自2015年从事“微警”项目研发工作起，大白互联立足“互联网+政务”、“互联网+警务”、
                        “互联网+身份认证”等前沿领域，凭借出色的研发实力与先进的服务理念，至2017年已经发展形成可信身份认证服务、
                        财税移动支付服务、移动综合警务服务等多条产品线。基于上述产品线，公司立志打造高水平、标准化的系统平台，
                        面向全国拓展业务覆盖范围，以扎实进取、创新争先的态度，不断增强行业竞争力与社会影响力，跻身翘楚行列。
                  <br></br>
                        <br></br>
                        <br></br>
                        我们不做技术的搬运工，我们是技术的研发者。</p>
                    </div>
                  </div>
                  {/* 大白事件 */}
                  <div className='event'>
                    <div className="title">
                      <i className="title-line"></i>
                      <span>大白事件</span>
                      <i className="title-line"></i>
                    </div>
                    <p className="title-en">GREAT EVENTS OF DABBY</p>
                  </div>
                  {/* 工作环境 */}
                  <div className='WORKING'>
                    <div className="title">
                      <i className="title-line"></i>
                      <span>工作环境</span>
                      <i className="title-line"></i>
                    </div>
                    <p className="title-en">WORKING ENVIRONMENT</p>
                    <Container style={{ color: "#ffffff" }}>
                      <Row>
                        <Col md={3} style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                          <img className="img-fluid" src={`/images/about/mascot1.png`} alt='图片加载失败' />
                        </Col>
                        <Col md={3} style={{ paddingLeft: "0px", paddingRight: "0px", background: "#9DA5CC" }}>
                          <p className='name-en'>MASCOT</p>
                          <p className='name'>吉祥物</p>
                          <div className='mascot-line'></div>
                        </Col>
                        <Col md={6} style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                          <img className="img-fluid" src={`/images/about/mascot2.png`} alt='图片加载失败' />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={9} style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                          <img className="img-fluid" src={`/images/about/woking.png`} alt='图片加载失败' />
                        </Col>
                        <Col md={3} style={{ paddingLeft: "0px", paddingRight: "0px", background: "#3e9ac8" }}>
                          <p className='name-en'>WORKING ENVIRONMENT</p>
                          <p className='name'>工作环境</p>
                          <div className='mascot-line'></div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={3} style={{ paddingLeft: "0px", paddingRight: "0px", background: "#9897ad" }}>
                          <p className='name-en'>WORKING ENVIRONMENT</p>
                          <p className='name'>工作环境</p>
                          <div className='mascot-line'></div>
                        </Col>
                        <Col md={9} style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                          <img className="img-fluid" src={`/images/about/woking.png`} alt='图片加载失败' />
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  {/* 公司活动 */}
                  <div className='COMPANY'>
                    <div className="title">
                      <i className="title-line"></i>
                      <span>公司活动</span>
                      <i className="title-line"></i>
                    </div>
                    <p className="title-en">COMPANY ACTIVITIES</p>
                  </div>
                </div>
              </TabPanel>
              {/* 联系我们 */}

              <TabPanel>
                <div className='COMPANY'>

                  {/* 地理位置 */}

                  <div className="title">
                    <i className="title-line"></i>
                    <span>地理位置</span>
                    <i className="title-line"></i>
                  </div>
                  <p className="title-en">GEOGRAPHIC LOCATION</p>
                  <div style={{width:"100%",height:"500px"}}>
                  <div id="container">
                  componentDidMount() {//生命钩子，组件被挂在后调用

                    fun1()

                  }
</div>
</div>


                  {/* 联系方式 */}
                  <div className="title">
                    <i className="title-line"></i>
                    <span>联系方式</span>
                    <i className="title-line"></i>
                  </div>
                  <p className="title-en">CONTACT INFORMATION</p>
                  <p className="addr">                    广州大白互联网科技有限公司（南沙总部）<br></br>
                    地址：广州市南沙区中景一街3号南海璟奥园D型独立商铺（自编D3）103房<br></br>
                    电话：020-39050255</p>
                  <p className="addr">                    广州大白互联网科技有限公司（南沙总部）<br></br>
                    地址：广州市南沙区中景一街3号南海璟奥园D型独立商铺（自编D3）103房<br></br>
                    电话：020-39050255</p>
                </div>
              </TabPanel>
            </div>
          </div>

          {/* 加入我们 */}

          <TabPanel>
            <div className="container-xl">
              <Container>
                <Row>
                  <Col md={3} style={{ background: "#ffffff" }}>
                    <div className='join-logo'></div>
                    <Row className='tags'>
                      <Col>
                        <div className='tag'>周末双休</div>
                        <div className='tag'>员工生日会</div>
                        <div className='tag'>五险一金</div>
                        <div className='tag'>员工运动会</div>
                        <div className='tag'>员工聚餐</div>
                        <div className='tag'>弹性上班</div>
                        <div className='tag'>年底双休</div>
                      </Col>
                      <Col>
                        <div className='tag'>带薪年假</div>
                        <div className='tag'>法定假期</div>
                        <div className='tag'>年度体验</div>
                        <div className='tag'>年会旅游</div>
                        <div className='tag'>节日礼品</div>
                        <div className='tag'>开工利是</div>
                        <div className='tag'>扁平管理</div>
                      </Col>
                    </Row>
                    <a href='#' className='eamill'>发送简历到：hr@dabby.cn</a>
                  </Col>
                  <Col md={9}>
                    <div className="md20" style={{ marginBottom: "0.2rem" }}>
                      <div className="info-top">
                        <p className="job-name">业务运营经理</p>
                        <span className="salary">12-15K</span>
                        <span className="experience">本科</span>
                        <Accordion>
                          <Card className="join-btn">
                            <Card.Header style={{ background: "none" }}>
                              <Accordion.Toggle as={Button} variant="primary" eventKey="0">
                                展开
                        </Accordion.Toggle>

                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                              <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        </Accordion>
                      </div>
                    </div>
                  </Col>
                </Row>

              </Container>
            </div>
          </TabPanel>
        </div>
      </Tabs>

    </div>


  </Layout>


)


export default AboutPage