import React from 'react';
import { DropdownOption } from '../Dropdown';

import { Container, DropdownStyles } from './styles';

const NavBar: React.FC = () => {
  return (
    <DropdownStyles>
      <Container>
        <ul>
          <li>
            <DropdownOption name="Produtos" Content={() => <h1>Produtos</h1>} />
          </li>
          <li>
            <DropdownOption
              name="Desenvolvedores"
              Content={() => <h1>Desenvolvedores</h1>}
            />
          </li>
          <li>
            <DropdownOption name="Empresa" Content={() => <h1>Empresa</h1>} />
          </li>
        </ul>
      </Container>
    </DropdownStyles>
  );
};

export default NavBar;
