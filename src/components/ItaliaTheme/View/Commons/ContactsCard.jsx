import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardBody, CardText, CardTitle, Icon } from 'design-react-kit';
import { getContent, resetContent } from '@plone/volto/actions';
import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { renderPDCItemValue } from 'design-comuni-plone-theme/helpers';

const ContactsCard = ({ contact = {} }) => {
  const dispatch = useDispatch();

  const contactUrl = contact['@id'];

  const { loading, loaded, error, data } = useSelector(
    (state) => state.content.subrequests[flattenToAppURL(contactUrl)] ?? {},
  );

  useEffect(() => {
    if (!loading && !loaded) {
      dispatch(
        getContent(
          flattenToAppURL(contactUrl),
          null,
          flattenToAppURL(contactUrl),
        ),
      );
    }
  }, [dispatch, contactUrl, loading, loaded]);

  useEffect(
    () => () => dispatch(resetContent(flattenToAppURL(contactUrl))),
    [dispatch, contactUrl],
  );

  if (error) {
    return null;
  }

  return (
    <Card teaser noWrapper className="shadow rounded my-3">
      <Icon icon="it-telephone" />
      <CardBody>
        <CardTitle className="h5">
          <UniversalLink href={contact['@id']} className="text-decoration-none">
            {contact.title}
          </UniversalLink>
        </CardTitle>
        <CardText>
          {data?.value_punto_contatto.map((pdc, index) => (
            <p key={index}>{renderPDCItemValue(pdc)}</p>
          )) ?? null}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default ContactsCard;
