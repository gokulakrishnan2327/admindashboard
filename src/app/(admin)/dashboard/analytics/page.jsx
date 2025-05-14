import { Col, Row } from 'react-bootstrap';
import PageMetaData from '@/components/PageTitle';
import Conversions from './components/Conversions';
import SessionByBrowser from './components/SessionByBrowser';
import Stats from './components/Stats';
import TopPages from './components/TopPages';
import UserConversions from './components/UserConversions';
import UserDistribution from './components/UserDistribution';
import UserStats from './components/UserStats';
import UsersList from './components/UsersList';
export default function Home() {
  return <>
        <PageMetaData title="User Management" />

      <UserStats />
      <Row>
        <Col>
          <UserConversions />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <UserDistribution />
        </Col>
        <Col lg={6}>
          <UsersList limit={15} showViewAll={true} />
        </Col>
      </Row>
{/* 
      <PageMetaData title="Analytics" />

      <Stats />
      <Row>
        <Col>
          <Conversions />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <SessionByBrowser />
        </Col>
        <Col lg={6}>
          <TopPages />
        </Col>
      </Row> */}
    </>;
}