import React from 'react';
import {Suspense} from 'react';
import {useRouteParams, Seo} from '@shopify/hydrogen';

import {AccountActivateForm} from '../../../../components/Account/Dashboard/AccountActivateForm.client';
import {Layout} from '../../../../components/Global/Layout.server';

/**
 * This page shows a form for the user to activate an account.
 * It should only be accessed by a link emailed to the user.
 */
export default function ActivateAccount() {
  const {id, activationToken} = useRouteParams();

  return (
    <Layout>
      <Suspense>
        <Seo type="noindex" data={{title: 'Activate account'}} />
      </Suspense>
      <AccountActivateForm id={id} activationToken={activationToken} />
    </Layout>
  );
}
