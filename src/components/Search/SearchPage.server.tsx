import React from 'react';
import {Heading} from '../Elements/Heading';
import {Input} from '../Elements/Input';
import {PageHeader} from '../Elements/PageHeader';
import {Layout} from '../Global/Layout.server';

export function SearchPage({
  searchTerm,
  children,
}: {
  searchTerm?: string | null;
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <PageHeader>
        <Heading as="h1" size="copy">
          Search
        </Heading>
        <form className="relative flex w-full text-heading">
          <Input
            defaultValue={searchTerm}
            placeholder="Search…"
            type="search"
            variant="search"
            name="q"
          />
          <button className="absolute right-0 py-2" type="submit">
            Go
          </button>
        </form>
      </PageHeader>
      {children}
    </Layout>
  );
}
