import { Provider } from './Provider';
import './globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className='light:bg-light-gradient'>
      <body className="dark:bg-dark-gradient">
        <Provider>
          <div className="main"></div>
          {children}
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
