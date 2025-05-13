import { Helmet } from 'react-helmet-async';
import { DEFAULT_PAGE_TITLE } from '@/context/constants';
const PageMetaData = ({
  title
}) => {
  const defaultTitle = DEFAULT_PAGE_TITLE;
  return <Helmet>
      <title>{title ? `${title} | Pitchmatter- Admin Dashboard ` : defaultTitle}</title>
    </Helmet>;
};
export default PageMetaData;