import { useUrl, Link, useCart, useLocalization } from "@shopify/hydrogen";
import { Drawer, useDrawer } from "../Drawer/Drawer.client";
import { CartDetails } from "../Cart/CartDetails.client";
import { IconAccount, IconSearch } from "../Elements/Icon";
import { Input } from "../Elements/Input"
import { LanguageDropdown } from "../Elements/Dropdown.client"

export default function Header({ shop, menu, language }) {
  const { pathname } = useUrl();
  const { isOpen, openDrawer, closeDrawer } = useDrawer();

  /* const {country, locale, language} = useLocalization(); */

  const isHome = pathname === "/";
  return (
    <>
      <Drawer open={isOpen} onClose={closeDrawer}>
        <div className="grid">
          <Drawer.Title>
            <h2 className="sr-only">Cart Drawer</h2>
          </Drawer.Title>
          <CartDetails onClose={closeDrawer} />
        </div>
      </Drawer>
      <header role="banner" className="header_nav">
        <div>
          <Link className="font-bold" to="/">
            {shop.name}
          </Link>
        </div>

        <div>
          {(menu?.items || []).map((page, index) => (
            <Link key={index} to={page.url}>{page.title}</Link>
          ))}
        </div>

        {/* Form */}

        <div>
          <form
            action={`/search`}
            className="items-center gap-2 sm:flex"
          >
            <button type="submit">
              <IconSearch />
            </button>
            <Input
              type="search"
              variant="minisearch"
              placeholder="Search"
              name="q"
            />
          </form>
        </div>
        
        {/* Account */}
        <Link to={'/account'}>
          <IconAccount />
        </Link>
        
        {/* Shop */}
        <button onClick={openDrawer} className="relative flex items-center justify-center w-8 h-8">
          <IconBag />
          <CartBadge dark={isHome} />
        </button>

        {/* Dropdown Language */}
        <LanguageDropdown lng={language}/>
    
      </header>
    </>
  );
}

function IconBag() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5"
    >
      <title>Bag</title>
      <path
        fillRule="evenodd"
        d="M8.125 5a1.875 1.875 0 0 1 3.75 0v.375h-3.75V5Zm-1.25.375V5a3.125 3.125 0 1 1 6.25 0v.375h3.5V15A2.625 2.625 0 0 1 14 17.625H6A2.625 2.625 0 0 1 3.375 15V5.375h3.5ZM4.625 15V6.625h10.75V15c0 .76-.616 1.375-1.375 1.375H6c-.76 0-1.375-.616-1.375-1.375Z"
      />
    </svg>
  );
}

function CartBadge({ dark }) {
  const { totalQuantity } = useCart();

  if (totalQuantity < 1) {
    return null;
  }
  return (
    <div
      className={`${
        dark ? "text-black bg-white" : "text-white bg-black"
      } absolute bottom-1 right-1 text-[0.625rem] font-medium subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px`}
    >
      <span>{totalQuantity}</span>
    </div>
  );
}