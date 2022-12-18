import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';

export default function ProductScreen() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return (
      <Layout>
        <div className='flex grow justify-center items-center'>Product Not Found</div>
      </Layout>
    );
  }
  return <Layout title={product.name}>
    <div className='py-2'>
      <Link href={'/'}>&#60; back to products</Link>
    </div>
  </Layout>;
}
