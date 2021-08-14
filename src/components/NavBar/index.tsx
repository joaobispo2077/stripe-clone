import React from 'react';
import { Company, Developers, Products } from '../Content';
import { DropdownOption, DropdownProvider, DropdownRoot } from '../Dropdown';

import { Container, DropdownStyles } from './styles';

const NavBar: React.FC = () => {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOption
                name="Produtos"
                Content={Products}
                backgroundHeight={1}
              />
            </li>
            <li>
              <DropdownOption
                name="Desenvolvedores"
                Content={Developers}
                backgroundHeight={2}
              />
            </li>
            <li>
              <DropdownOption
                name="Empresa"
                Content={Company}
                backgroundHeight={3}
              />
            </li>
          </ul>
        </Container>

        <DropdownRoot />
      </DropdownStyles>
    </DropdownProvider>
  );
};

export default NavBar;
