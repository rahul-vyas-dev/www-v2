import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '@/routes';
import { motion, useScroll, useSpring } from 'framer-motion';

 function MotionScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 100,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: '0%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: '#3b82f6',
        zIndex: 1000,
      }}
    />
  );
}

const App = () => {
  useEffect(() => {
    const unsubscribe = router.subscribe(() => {
      window.scrollTo(0, 0);
    });
    const handleRedirect = () => {
      const redirectPath = sessionStorage.getItem('gh_redirect');
      if (redirectPath) {
        console.log('Restoring route:', redirectPath);
        sessionStorage.removeItem('gh_redirect');
        setTimeout(() => {
          router.navigate(redirectPath);
        }, 10);
      }
    };
    handleRedirect();

    return () => unsubscribe();
  }, []);

  return (
    <>
      <MotionScrollProgress/>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
