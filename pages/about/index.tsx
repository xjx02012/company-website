import * as React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Layout from '../../components/Layout'
import '../../styles/theme/about.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'





const AboutPage: React.FunctionComponent = () => (
  <Layout title="About | Next.js + TypeScript Example" >
    <div className="min-vh-100 ">

      <img className="img-fluid" src={`/images/banner/dabbyTeam.png`} />
      <div className="container-xl">
        <div className="about">
          <Tabs>
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
              {/* 公司理念 */}
              <div className='team'>
                <div className="title">
                  <i className="title-line"></i>
                  <span>公司理念</span>
                  <i className="title-line"></i>
                </div>
                <p className="title-en">COMPANY CONCEPTS</p>
                
                  <div className='discountlcon'>
                    111
                  </div>
                            
                </div>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 3</h2>
            </TabPanel>
          </Tabs>

        </div>
      </div>
    </div>

  </Layout>


)


export default AboutPage