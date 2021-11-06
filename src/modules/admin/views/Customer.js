import { Container, AdminHeader} from 'reusables';
import {  CustomerPayments  } from 'components';
import { AdminPaths } from 'routes/paths';
import { name } from 'faker';

const cusName = `${name.firstName()} ${name.lastName()}`
const Customer = () => {

  return (
    <section>
      <AdminHeader title={cusName} historyStack={[{ title: 'Customers', to: AdminPaths.CUSTOMERS }]} />

      <Container isAdmin>
        <CustomerPayments />
      </Container>
    </section>
  )
}

export default Customer;
