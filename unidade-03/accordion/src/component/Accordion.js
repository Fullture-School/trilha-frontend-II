import React from 'react';
import { ACCORDION_TERM, ACCORDION_DEFINITION } from './constant';
import { useAccordion } from './hooks/useAccordion';
import PropTypes from 'prop-types';

const Accordion = ({ listActitvies, style }) => {

  const { listActivity, open, onOpen } = useAccordion();

  const styleComponent = style;

  return (
    <styleComponent.DefinitionWrapper>
      <styleComponent.DL ref={listActivity}>
        {
          listActitvies.map((activity, position) => {
            const idTerm = `${ACCORDION_TERM}${position}`;
            const idDefinition = `${ACCORDION_DEFINITION}${position}`;
            const shouldOpen = open === idTerm;
            const propsDD = {
              tabIndex: shouldOpen ? 0 : -1
            };
            return (
              <>
                <styleComponent.DT
                  id={idTerm}
                  key={position}
                  onPress={onOpen(idTerm)}
                  onClick={onOpen(idTerm)}
                  tabIndex="0">
                  <styleComponent.IconOpen open={shouldOpen} /><styleComponent.DText>{activity.term}</styleComponent.DText>
                </styleComponent.DT>
                <styleComponent.DD
                  id={idDefinition}
                  {...propsDD}
                  open={shouldOpen}>
                  {activity.definition}
                </styleComponent.DD>
              </>
            )
          })
        }
      </styleComponent.DL>
    </styleComponent.DefinitionWrapper>
  );
}

Accordion.propTypes = {
  listActitvies: PropTypes.array.isRequired,
  style: PropTypes.any.isRequired,
}

export default Accordion;