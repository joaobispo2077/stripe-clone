import React from 'react';
import { Company, Developers, Products } from '../Content';
import { DropdownOption, DropdownProvider } from '../Dropdown';

import { Container, DropdownStyles } from './styles';

const NavBar: React.FC = () => {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOption name="Produtos" Content={() => Products} />
            </li>
            <li>
              <DropdownOption
                name="Desenvolvedores"
                Content={() => Developers}
              />
            </li>
            <li>
              <DropdownOption name="Empresa" Content={() => Company} />
            </li>
          </ul>
        </Container>
      </DropdownStyles>
    </DropdownProvider>
  );
};

export default NavBar;
