# Vinamec Fullstack Source

Source has been separated into:

- `Frontend/`: Next.js website (public-facing hospital style pages + online booking)
- `Backend/`: Express API (booking endpoint for frontend form)

## Frontend pages

- `/` Trang chu
- `/dat-lich` Dat lich online (no login required)
- `/chuyen-khoa`
- `/bac-si`
- `/co-so`
- `/goi-kham`
- `/tin-tuc`
- `/huong-dan`
- `/lien-he`

## Run project

### 1) Backend

```bash
cd Backend
cp .env.example .env
npm install
npm run dev
```

API runs at `http://localhost:4000`.

### 2) Frontend

```bash
cd Frontend
cp .env.example .env.local
npm install
npm run dev
```

Frontend runs at `http://localhost:3000`.

## Main API

- `GET /api/health` health check
- `GET /api/bookings` list booking requests
- `POST /api/bookings` create booking request
# Vinamec Frontend

Scalable frontend for the Vinamec dental clinic management system, built with Next.js App Router, React, and TypeScript.

## Suggested UI Library

Recommended: **shadcn/ui** for long-term scalability.

- Lightweight and composable, ideal for feature-based architecture.
- Works naturally with Tailwind and custom design tokens.
- Better control over medical-grade visual consistency compared to heavy pre-styled kits.

Alternative options:

- MUI: enterprise-ready with many components.
- Ant Design: fast admin panel setup with rich data components.

## Vinamec Theme Palette

- Primary 700: `#0B57D0`
- Primary 600: `#1565D8`
- Primary 100: `#DBEAFE`
- Background: `#F4F8FD`
- Surface: `#FFFFFF`
- Text Primary: `#0F172A`
- Text Secondary: `#64748B`
- Border: `#D9E4F2`

## Project Structure

```text
.
├── src
│   ├── app
│   │   ├── (admin)
│   │   │   ├── appointments/page.tsx
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── doctors/page.tsx
│   │   │   ├── medical-records/page.tsx
│   │   │   ├── patients/page.tsx
│   │   │   ├── payments/page.tsx
│   │   │   └── layout.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── layout
│   │   │   ├── Header.tsx
│   │   │   └── Sidebar.tsx
│   │   └── ui
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Table.tsx
│   └── lib
│       └── navigation.ts
├── eslint.config.mjs
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Run Locally

```bash
npm install
npm run dev
```

## DAC TA NHOM CHUC NANG 1 - QUAN LY HE THONG

### 1) Pham vi va ly do chon nhom chuc nang dau tien

Nhom chuc nang **Quan ly he thong** duoc chon lam nhom dau tien vi co the trien khai doc lap, khong phu thuoc truc tiep vao nghiep vu tiep nhan benh nhan, ho so benh an hay thanh toan. Nhom nay tao nen "du lieu nen" de cac nhom chuc nang khac su dung ve sau.

Bao gom 3 chuc nang cot loi:
- Quan ly nguoi dung (tai khoan he thong)
- Quan ly bac si
- Quan ly danh muc dich vu

Muc tieu UX/UI huong theo phong cach Vinmec/Vinamec: ro rang, y khoa, de thao tac, uu tien an toan du lieu va truy vet thao tac.

---

### 2) Chuc nang 1.1 - Quan ly nguoi dung

#### Y nghia chuc nang
Quan ly tai khoan dang nhap cho nhan su van hanh phong kham (quan tri, le tan, ke toan, dieu phoi...), gan quyen theo vai tro de dam bao moi nguoi dung thao tac dung pham vi.

#### Tien dieu kien
- Nguoi thao tac da dang nhap he thong admin.
- Tai khoan thao tac co quyen `SYSTEM_ADMIN` hoac quyen tuong duong.
- He thong da co cau hinh vai tro/co che phan quyen co ban.

#### Hau dieu kien
- Tai khoan moi duoc tao/sua/khoa thanh cong va luu vao CSDL.
- Quyen truy cap duoc cap nhat dung theo vai tro.
- Co nhat ky thao tac (ai, thoi gian, hanh dong, du lieu thay doi).

#### Luong su kien
**Luong chinh - Tao moi nguoi dung**
1. Quan tri truy cap man hinh "Quan ly nguoi dung".
2. Chon "Them nguoi dung".
3. Nhap thong tin: ho ten, email/so dien thoai, ten dang nhap, vai tro, trang thai.
4. Nhan "Luu".
5. He thong kiem tra hop le du lieu.
6. He thong tao tai khoan, sinh mat khau tam/luong kich hoat.
7. Hien thi thong bao tao thanh cong.

**Luong phat sinh**
- Email/ten dang nhap da ton tai -> Bao loi va yeu cau nhap lai.
- Vai tro khong hop le theo ma tran quyen -> Tu choi luu.
- Tai khoan dang duoc gan phien lam viec quan trong -> Khong cho phep khoa ngay, yeu cau xac nhan 2 buoc.
- Loi ket noi CSDL/API -> Hien thi loi ky thuat, khong thay doi du lieu.

#### Rang buoc / quy tac nghiep vu
- Moi tai khoan phai gan it nhat 1 vai tro.
- Email/ten dang nhap la duy nhat tren toan he thong.
- Tai khoan quan tri he thong khong duoc tu khoa chinh minh.
- Mat khau tam thoi het han trong khoang thoi gian cau hinh (vi du: 24 gio).
- Tat ca hanh dong cap nhat quyen phai ghi audit log.

#### Giao dien minh hoa
**Danh sach nguoi dung (list page)**
- Bo loc: Tu khoa, Vai tro, Trang thai.
- Bang du lieu: Ma NV, Ho ten, Vai tro, So dien thoai, Trang thai, Lan dang nhap cuoi.
- Hanh dong nhanh: Xem chi tiet, Sua, Dat lai mat khau, Khoa/Mo khoa.

**Form tao/sua nguoi dung (drawer/modal)**
- Cac truong: Ho ten, Email, SDT, Ten dang nhap, Vai tro, Trang thai.
- Nut thao tac: Huy, Luu tam, Luu.
- Thong diep canh bao mau vang khi thay doi vai tro anh huong den quyen nhay cam.

---

### 3) Chuc nang 1.2 - Quan ly bac si

#### Y nghia chuc nang
Quan ly ho so bac si nha khoa (thong tin hanh nghe, chuyen khoa, lich lam viec) lam co so cho dat lich, dieu phoi kham va truyen thong thuong hieu phong cach Vinmec.

> Lien ket source hien co: module `Doctors` da co khung giao dien admin tai `src/app/(admin)/doctors/page.tsx` va menu dieu huong tai `src/lib/navigation.ts`.

#### Tien dieu kien
- Nguoi dung da dang nhap he thong admin.
- Co quyen `DOCTOR_MANAGER` hoac cao hon.
- Danh muc chuyen khoa co san (neu co ap dung trong phien ban trien khai).

#### Hau dieu kien
- Ho so bac si duoc tao/cap nhat/kich hoat-ngung hoat dong theo quy trinh.
- Du lieu bac si san sang cho cac chuc nang dat lich va website cong khai.
- Lich su chinh sua ho so duoc truy vet day du.

#### Luong su kien
**Luong chinh - Tao moi bac si**
1. Truy cap "Doctors".
2. Chon "Them bac si".
3. Nhap thong tin: ho ten, ma bac si, chuyen khoa, bang cap, so nam kinh nghiem, lich lam viec, trang thai.
4. Tai anh dai dien (tuy chon) va mo ta ngan.
5. Nhan "Luu".
6. He thong kiem tra rang buoc (truong bat buoc, dinh dang, trung ma bac si).
7. Luu va hien thi trong danh sach.

**Luong phat sinh**
- Trung ma bac si -> Bao loi va tu choi luu.
- Lich lam viec bi trung khung gio voi du lieu ca truc khoa -> Canh bao, yeu cau chinh sua.
- Bac si da co lich hen sap toi nhung bi chuyen sang ngung hoat dong -> Yeu cau dieu phoi lai lich hen truoc khi luu.

#### Rang buoc / quy tac nghiep vu
- Ma bac si la duy nhat.
- Bac si "Ngung hoat dong" khong duoc mo lich kham moi.
- Ho so bac si bat buoc co toi thieu: ho ten, chuyen khoa, trang thai.
- Anh dai dien (neu co) phai dung dinh dang va dung luong theo chinh sach media.

#### Giao dien minh hoa
**Danh sach bac si**
- Card/List hien: Anh, Ho ten, Chuyen khoa, Trang thai, Ca lam viec gan nhat.
- Bo loc: Chuyen khoa, Trang thai, Co lich trong ngay.
- Nut nhanh: Them bac si, Xuat danh sach.

**Chi tiet bac si**
- Tab 1: Thong tin chung.
- Tab 2: Lich lam viec (tuan/thang).
- Tab 3: Lich su cap nhat ho so.

---

### 4) Chuc nang 1.3 - Quan ly danh muc dich vu

#### Y nghia chuc nang
Chuan hoa danh muc dich vu nha khoa (kham tong quat, nha chu, nieng rang, trong rang...) de dong bo gia, thoi luong du kien, thong tin hien thi website va ho tro dat lich.

#### Tien dieu kien
- Nguoi dung da dang nhap he thong admin.
- Co quyen `SERVICE_MANAGER` hoac cao hon.
- Cau hinh don vi tien te, thue/phu thu (neu co) da duoc dinh nghia.

#### Hau dieu kien
- Dich vu moi duoc tao/cap nhat/an hien theo trang thai.
- Danh muc dich vu dong bo cho form dat lich va man hinh tham chieu noi bo.
- Co ban ghi lich su thay doi gia/thuoc tinh quan trong.

#### Luong su kien
**Luong chinh - Tao moi dich vu**
1. Mo man hinh "Danh muc dich vu".
2. Chon "Them dich vu".
3. Nhap: ma dich vu, ten dich vu, nhom dich vu, gia niem yet, thoi luong du kien, mo ta ngan, trang thai.
4. Nhan "Luu".
5. He thong kiem tra hop le.
6. Luu vao CSDL va cap nhat danh muc.

**Luong phat sinh**
- Trung ma dich vu -> Bao loi.
- Gia niem yet <= 0 -> Tu choi luu.
- Dich vu dang duoc su dung trong goi kham/chuong trinh gia nhung yeu cau xoa cung -> Khong cho phep, chi cho "ngung cung cap".

#### Rang buoc / quy tac nghiep vu
- Ma dich vu duy nhat.
- Gia niem yet > 0 va phai theo buoc lam tron theo quy dinh.
- Dich vu ngung cung cap van giu lich su de doi soat.
- Neu dich vu hien thi cong khai, can co ten + mo ta ngan toi thieu.

#### Giao dien minh hoa
**Danh sach dich vu**
- Bo loc: Nhom dich vu, Khoang gia, Trang thai.
- Bang: Ma DV, Ten DV, Nhom, Gia, Thoi luong, Trang thai, Ngay cap nhat.
- Nut nhanh: Them dich vu, Cap nhat gia hang loat, Ngung cung cap.

**Form dich vu**
- Cum thong tin chinh: Ma, Ten, Nhom, Trang thai.
- Cum tai chinh: Gia niem yet, ghi chu tai chinh.
- Cum hien thi web: Mo ta ngan, thu tu uu tien.

---

### 5) Mock giao dien tong quan theo phong cach Vinmec

Khung giao dien de xuat thong nhat voi admin shell hien co (`Header`, `Sidebar`) trong source:
- Sidebar trai: Dashboard, Patients, Appointments, Medical Records, Doctors, Payments, va bo sung "System".
- Header tren: tieu de "Vinamec Management", hanh dong nhanh va thong bao.
- Vung noi dung: danh sach + bo loc + form tao/sua dang modal/drawer.

Wireframe tham chieu:

```text
+---------------------------------------------------------------+
| Vinamec Management                          [Notifications]   |
| Dental Clinic Operations Overview            [+ New]          |
+-------------+-------------------------------------------------+
| Sidebar     | Quan ly he thong                               |
| - Dashboard | [Tabs] Nguoi dung | Bac si | Dich vu           |
| - ...       | ------------------------------------------------|
| - System    | [Filter Bar] keyword | role/status | date      |
|             | ------------------------------------------------|
|             | [Data Table / Cards]                           |
|             |  - Danh sach doi tuong                         |
|             |  - Trang thai, hanh dong nhanh                 |
|             | ------------------------------------------------|
|             | [Button] Them moi                              |
+-------------+-------------------------------------------------+
```

---

### 6) Tieu chi san sang mo rong sang cac nhom chuc nang tiep theo

Khi nhom 1 hoan tat, he thong dat du cac dieu kien de trien khai nhom 2 (van hanh kham chua):
- Da co tai khoan va phan quyen nguoi dung.
- Da co du lieu bac si va trang thai san sang tiep nhan lich.
- Da co danh muc dich vu de dat lich va tinh phi co ban.
