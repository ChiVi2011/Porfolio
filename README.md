# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## IntersectionObserver

là API có sẵn trong trình duyệt, giúp theo dõi việc một phần tử có giao với một vùng quan sát hay không.

## boundingClientRect.top

là tọa độ cạnh trên của phần tử so với viewport, tức vùng nội dung đang hiển thị của trình duyệt.

                                            1. Navbar được render
                                            React chạy useEffect

                                            2. Tìm các section
                                            map → querySelector → filter

                                            3. Observer theo dõi
                                            observe() + rootMargin

                                            4. Cuộn trang
                                            Callback nhận entries

                                            5. Lọc và sắp xếp
                                            filter() → sort()

                                            6. setActiveMenu()
                                            Menu tương ứng chuyển sang màu tím
