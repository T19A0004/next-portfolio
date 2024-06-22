// app/layout.tsx

import { Provider } from './Provider';
import ToTopButton from "../components/ToTopButton";
import './globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className='light:bg-light-gradient'>
      <body className="dark:bg-dark-gradient">
        <Provider>
          <div className="main"></div>
          {children}
          <ToTopButton />
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
