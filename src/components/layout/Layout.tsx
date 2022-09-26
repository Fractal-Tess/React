import AnimateInView from '$components/animation/AnimateInView';
import Footer from '$components/footer/Footer';
import Header from '$components/header/Header';
import Theme from '$components/theme/Theme';
import type { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Theme>
      <AnimateInView>
        <div className="min-h-screen flex flex-col justify-between bg-gradient-to-t from-base-300 to-base-100">
          <Header />
          {children}
          <Outlet />
          <Footer />
        </div>
      </AnimateInView>
    </Theme>
  );
}
