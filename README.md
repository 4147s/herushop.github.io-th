# Herushop.github.io-th 🛒
> **Thai Shopping Heru** - Premium Bilingual E-Commerce Frontend Platform.

Welcome to the official repository of **Herushop**, a high-performance, fully responsive, and bilingual (English/Thai) e-commerce web application optimized for deployment on GitHub Pages.

🌐 **Live Demo:** [https://herushop.github.io](https://herushop.github.io)

---

## 📌 Table of Contents / สารบัญ
1. [Features / คุณสมบัติ](#-features--คุณสมบัติ)
2. [Architecture / โครงสร้างไฟล์](#-architecture--โครงสร้างไฟล์)
3. [Installation / การติดตั้งเพื่อพัฒนา](#%EF%B8%8F-installation--การติดตั้งเพื่อพัฒนา)
4. [Deployment to GitHub Pages / การอัปโหลดไปยัง GitHub Pages](#-deployment-to-github-pages--การอัปโหลดไปยัง-github-pages)
5. [Localization Architecture / ระบบสลับภาษา](#-localization-architecture--ระบบสลับภาษา)

---

## 🚀 Features / คุณสมบัติ

* **Bilingual Engine (EN/TH):** Instant, client-side language switching without reloading using LocalStorage persistence.
    *ระบบสลับภาษาอัจฉริยะ (อังกฤษ/ไทย) ทำงานฝั่งไคลเอนต์ทันทีโดยไม่ต้องโหลดหน้าซ้ำ พร้อมจำค่าแท็บภาษาที่เลือกไว้*
* **Fully Functional Shopping Cart:** Add, remove, update quantities, and calculate real-time VAT (7% Thailand Standard) and shipping fees.
    *ระบบตะกร้าสินค้าเต็มรูปแบบ เพิ่ม ลด ลบ จำนวนสินค้า พร้อมคำนวณภาษีมูลค่าเพิ่ม (VAT 7%) และค่าจัดส่งแบบเรียลไทม์*
* **Complete Mock Authentication:** Interactive login and registration layouts with client-side validation.
    *ระบบจำลองการเข้าสู่ระบบและสมัครสมาชิก พร้อมการตรวจสอบความถูกต้องของฟอร์มฝั่งผู้ใช้งาน*
* **Pure Vanilla Stack:** Built using HTML5, CSS3 Custom Properties, and Vanilla ES6 JavaScript. No heavy frameworks required.
    *พัฒนาด้วย HTML5, CSS3 และ JavaScript ES6 แท้ ไม่ต้องพึ่งพาเฟรมเวิร์กขนาดใหญ่ โหลดเร็ว และปลอดภัย*

---

🛠️ Installation / การติดตั้งเพื่อพัฒนา
Prerequisites / สิ่งที่ต้องเตรียมก่อนเริ่ม
You only need a modern web browser and a code editor (like VS Code).
คุณต้องการเพียงแค่เว็บเบราว์เซอร์ที่ทันสมัยและโปรแกรมแก้ไขโค้ด (เช่น VS Code)

Step-by-Step Guide / ขั้นตอนการติดตั้ง
Clone the repository / คลอนรีโพสิทอรี: 
git clone [https://github.com/Herushop/Herushop.github.io-th.git](https://github.com/Herushop/Herushop.github.io-th.git)
cd Herushop.github.io-th
Run via Local Server / รันผ่านเซิร์ฟเวอร์จำลอง:
To prevent CORS issues when loading local JavaScript modules, it is highly recommended to use an extension like Live Server in VS Code, or run using Python:
เพื่อป้องกันปัญหา CORS แนะนำให้ใช้ Live Server บน VS Code หรือใช้คำสั่ง Python ด้านล่างนี้:
# Python 3.x
python -m http.server 8000
Deployment to GitHub Pages / การอัปโหลดไปยัง GitHub Pages
Create a repository on GitHub named Herushop.github.io or Herushop.github.io-th.

Push all 20 files to the main or master branch:
git init
git add .
git commit -m "Initial release of Thai Shopping Heru Platform"
git remote add origin [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
git branch -M main
git push -u origin main 
