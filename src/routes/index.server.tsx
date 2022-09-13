import React from "react";
import { Suspense } from "react";
import { Layout } from "../components/Global/Layout.server";
import { useShopQuery, CacheLong, gql } from "@shopify/hydrogen";
import Carousel from "../components/Elements/Carousel.client"
import {Collection_Carousel} from "../components/Elements/Carousel.client"

export default function Home() {
  const {
    data: { collections },
  } = useShopQuery({
    query: SHOP_QUERY,
    cache: CacheLong(),
  });
  const nuevos = useShopQuery({
    query: collection_nuevos,
    cache: CacheLong(),
  });
  const destacados = useShopQuery({
    query: collection_Destacados,
    cache: CacheLong(),
  });
  const wanted = useShopQuery({
    query: collection_MostWanted,
    cache: CacheLong(),
  });

  return (
    <Layout>
      <Suspense>
        {/* Banner Carrousel */}

        {/* Lo mas nuevo */}
        <hr className="hr_divider"/>
        <div className="Home_Titles_Main_Div">
          <h2 style={{fontSize: "1.5rem", fontWeight: "500"}}>NEW RELEASES</h2>
          <h4 style={{fontWeight: "400"}}>DISCOVER OUR NEW PRODUCTS</h4>
        </div>
        <div className="Padding">
          <Carousel images={nuevos.data.collection.products.nodes} multipleProducts={true}></Carousel>
        </div>

        {/* Categorias */}
        <hr className="hr_divider"/>
        <div className="Home_Titles_Main_Div">
          <h2 style={{fontSize: "2rem"}}>CATEGORIES</h2>
          <h4 style={{fontWeight: "400"}}>DISCOVER OUR PRODUCT LINES</h4>
        </div>
        <div className="Padding">
          <Collection_Carousel collection={collections.nodes} params={{autoplay: true, autoplaySpeed: 5000, infinite: true}}></Collection_Carousel>
        </div>

        {/* Destacados */}
        <hr className="hr_divider"/>
        <div className="Home_Titles_Main_Div">
          <h2 style={{fontSize: "2rem"}}>BECAUSE YOU DESERVE</h2>
          <h2 style={{fontSize: "2rem", fontWeight: "500"}}><i>A PERFECT FIGURE</i></h2>
        </div>
        <div className="Padding">
          <Carousel images={destacados.data.collection.products.nodes} params={{autoplay: true , autoplaySpeed: 5000, infinite: destacados.data.collection.products.nodes.length > 5}} multipleProducts={true}></Carousel>
        </div>  
          
        {/* THE MOST WANTED */}
        <hr className="hr_divider"/>
        <div className="Home_Titles_Main_Div">
          <h2 style={{fontWeight: "600", fontSize: "1.5rem"}}>THE MOST WANTED</h2>
          <h4 style={{fontWeight: "400"}}>FIND OUR BEST-SELLING PRODUCTS HERE</h4>
        </div>
        <div className="Padding">
          <Carousel images={wanted.data.collection.products.nodes} params={{autoplay: true, autoplaySpeed: 5000, infinite: wanted.data.collection.products.nodes > 5}} multipleProducts={true}></Carousel>
        </div>

        {/* Area de videos */}

        {/* Our History */}
        <hr className="hr_divider"/>
          <div className="Home_History_Main_Div">
            <div className="Home_History_Information_Div">
              <h2>OUR HISTORY</h2>
              <p>Sol Beauty and Care was born on February 8, 2018 with the idea of ​​giving women a tool to look and feel comfortable with their body, but above all to provide them with the talent of a team that has not stopped growing to position ourselves and be leaders in the beauty and care sector for all people.</p>
              <p>At Sol Beauty and Care we identify the need that women and men have to show off their bodies, which is why we seek, through our engineering and design research, to revolutionize garments suitable for these needs using top quality raw materials of 100% Colombian origin, adding an elegant and sophisticated touch between each of the products that Sol Beauty and Care makes.</p>
              <button>LEARN MORE</button>
            </div>
            <div>
              <img style={{boxShadow: "0 0 14px -2px #000000bf"}} src="https://cdn.shopify.com/s/files/1/0300/5926/6141/files/SolConCorona_480x.png?v=1647031297%201x,//cdn.shopify.com/s/files/1/0300/5926/6141/files/SolConCorona_960x.png?v=1647031297%202x" alt="" />
            </div>
          </div>
        <hr className="hr_divider"/>

      </Suspense>
    </Layout>
  );
}

const SHOP_QUERY = gql`
  query layout {
    collections(first: 20) {
      nodes {
        title
        onlineStoreUrl
        image {
          url
          altText
        }
      }
    },
  }
`;

const collection_nuevos = gql`
  query layout {
    collection(handle: "nuevos"){
      products(first: 10){
        nodes{
          title
          onlineStoreUrl
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1){
            nodes{
              url
              altText
            }
          }
        }
      }
    }
  }
`;

const collection_Destacados = gql`
  query layout {
    collection(handle: "destacados"){
      products(first: 10){
        nodes{
          title
          onlineStoreUrl
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1){
            nodes{
              url
              altText
            }
          }
        }
      }
    }
  }
`;

const collection_MostWanted = gql`
  query layout {
    collection(handle: "the-most-wanted"){
      products(first: 10){
        nodes{
          title
          onlineStoreUrl
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1){
            nodes{
              url
              altText
            }
          }
        }
      }
    }
  }
`;