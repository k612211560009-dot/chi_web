const GENRES = [
  { id: "all", label: "📚 Tất cả", color: "#4a5568" },
  { id: "vanhoc", label: "📖 Văn học", color: "#7c3aed" },
  { id: "thieunhi", label: "🌈 Thiếu nhi", color: "#d97706" },
  { id: "khoahoc", label: "🔬 Khoa học", color: "#0369a1" },
  { id: "lichsu", label: "🏛️ Lịch sử", color: "#b45309" },
  { id: "kynang", label: "💡 Kỹ năng", color: "#065f46" },
  { id: "tinhyeu", label: "💕 Tình yêu", color: "#be185d" },
  { id: "phieuluu", label: "⚔️ Phiêu lưu", color: "#c2410c" },
  { id: "trinh_tham", label: "🔍 Trinh thám", color: "#1e3a5f" },
  { id: "vientuong", label: "🚀 Viễn tưởng", color: "#4c1d95" },
  { id: "tamly", label: "🧠 Tâm lý", color: "#1e40af" },
  { id: "tonggiao", label: "🙏 Tôn giáo", color: "#92400e" },
  { id: "kinh_te", label: "📈 Kinh tế", color: "#166534" },
  { id: "nuoicon", label: "👶 Nuôi con", color: "#9f1239" },
  { id: "du_lich", label: "✈️ Du lịch", color: "#0e7490" },
  { id: "am_nhac", label: "🎵 Âm nhạc", color: "#7e22ce" },
  { id: "the_thao", label: "⚽ Thể thao", color: "#1d4ed8" },
  { id: "am_thuc", label: "🍜 Ẩm thực", color: "#b45309" },
  { id: "suc_khoe", label: "💪 Sức khỏe", color: "#15803d" },
  { id: "triet_hoc", label: "🤔 Triết học", color: "#4338ca" },
  { id: "kinh_dien", label: "📜 Kinh điển", color: "#7c3aed" },
  { id: "manga", label: "🎌 Manga", color: "#e11d48" },
  { id: "co_tich", label: "🧚 Cổ tích", color: "#d97706" },
  { id: "truyen_cuoi", label: "😄 Truyện cười", color: "#0369a1" },
];

const AGE_GROUPS = {
  kids: { label: "Thiếu nhi", cls: "age-kids" },
  teen: { label: "Thiếu niên", cls: "age-teen" },
  adult: { label: "Người lớn", cls: "age-adult" },
  all: { label: "Mọi lứa tuổi", cls: "age-all" },
};

const BOOK_TEMPLATES = [
  // Văn học
  {
    t: "Truyện Kiều",
    a: "Nguyễn Du",
    g: "vanhoc",
    age: "all",
    dur: "6h 20p",
    emoji: "📜",
    cover: "#7c3aed",
  },
  {
    t: "Số Đỏ",
    a: "Vũ Trọng Phụng",
    g: "vanhoc",
    age: "adult",
    dur: "5h 40p",
    emoji: "📕",
    cover: "#7c2d12",
  },
  {
    t: "Tắt Đèn",
    a: "Ngô Tất Tố",
    g: "vanhoc",
    age: "adult",
    dur: "4h 10p",
    emoji: "🕯️",
    cover: "#1c1917",
  },
  {
    t: "Dế Mèn Phiêu Lưu Ký",
    a: "Tô Hoài",
    g: "thieunhi",
    age: "kids",
    dur: "3h 20p",
    emoji: "🦗",
    cover: "#166534",
  },
  {
    t: "Chiến Tranh & Hòa Bình",
    a: "Lev Tolstoy",
    g: "vanhoc",
    age: "adult",
    dur: "42h",
    emoji: "⚔️",
    cover: "#1e3a5f",
  },
  {
    t: "Những Người Khốn Khổ",
    a: "Victor Hugo",
    g: "vanhoc",
    age: "all",
    dur: "28h",
    emoji: "🌧️",
    cover: "#374151",
  },
  {
    t: "Đồi Gió Hú",
    a: "Emily Brontë",
    g: "tinhyeu",
    age: "adult",
    dur: "9h",
    emoji: "🌪️",
    cover: "#4c1d95",
  },
  {
    t: "Kiêu Hãnh & Định Kiến",
    a: "Jane Austen",
    g: "tinhyeu",
    age: "adult",
    dur: "10h",
    emoji: "🌹",
    cover: "#9f1239",
  },
  {
    t: "Bắt Trẻ Đồng Xanh",
    a: "J.D. Salinger",
    g: "vanhoc",
    age: "teen",
    dur: "5h",
    emoji: "🌾",
    cover: "#713f12",
  },
  {
    t: "Lão Hạc",
    a: "Nam Cao",
    g: "vanhoc",
    age: "adult",
    dur: "1h 30p",
    emoji: "🐕",
    cover: "#292524",
  },
  // Thiếu nhi
  {
    t: "Harry Potter và Hòn Đá Phù Thủy",
    a: "J.K. Rowling",
    g: "thieunhi",
    age: "kids",
    dur: "8h",
    emoji: "🧙",
    cover: "#7e22ce",
  },
  {
    t: "Hoàng Tử Bé",
    a: "Antoine de Saint-Exupéry",
    g: "thieunhi",
    age: "all",
    dur: "2h",
    emoji: "🌹",
    cover: "#1d4ed8",
  },
  {
    t: "Alice Ở Xứ Sở Thần Tiên",
    a: "Lewis Carroll",
    g: "thieunhi",
    age: "kids",
    dur: "3h",
    emoji: "🐇",
    cover: "#be185d",
  },
  {
    t: "Cậu Bé Rừng Xanh",
    a: "Rudyard Kipling",
    g: "thieunhi",
    age: "kids",
    dur: "3h 40p",
    emoji: "🐆",
    cover: "#166534",
  },
  {
    t: "Gió Đã Qua Rồi",
    a: "M. Mitchell",
    g: "vanhoc",
    age: "adult",
    dur: "38h",
    emoji: "🌬️",
    cover: "#92400e",
  },
  {
    t: "Peter Pan",
    a: "J.M. Barrie",
    g: "thieunhi",
    age: "kids",
    dur: "3h 20p",
    emoji: "🧚",
    cover: "#0369a1",
  },
  {
    t: "Pinocchio",
    a: "Carlo Collodi",
    g: "thieunhi",
    age: "kids",
    dur: "2h 30p",
    emoji: "🤥",
    cover: "#d97706",
  },
  {
    t: "Cô Bé Lọ Lem",
    a: "Charles Perrault",
    g: "co_tich",
    age: "kids",
    dur: "45p",
    emoji: "👠",
    cover: "#be185d",
  },
  {
    t: "Bạch Tuyết & 7 Chú Lùn",
    a: "Anh em Grimm",
    g: "co_tich",
    age: "kids",
    dur: "50p",
    emoji: "🍎",
    cover: "#dc2626",
  },
  {
    t: "Cô Bé Quàng Khăn Đỏ",
    a: "Charles Perrault",
    g: "co_tich",
    age: "kids",
    dur: "40p",
    emoji: "🐺",
    cover: "#b91c1c",
  },
  // Khoa học
  {
    t: "Lược Sử Thời Gian",
    a: "Stephen Hawking",
    g: "khoahoc",
    age: "adult",
    dur: "6h",
    emoji: "🌌",
    cover: "#0c4a6e",
  },
  {
    t: "Sapiens: Lịch Sử Loài Người",
    a: "Yuval Noah Harari",
    g: "lichsu",
    age: "adult",
    dur: "15h",
    emoji: "🦴",
    cover: "#44403c",
  },
  {
    t: "Vũ Trụ Trong Hạt Nhân",
    a: "Brian Greene",
    g: "khoahoc",
    age: "adult",
    dur: "12h",
    emoji: "⚛️",
    cover: "#1e3a5f",
  },
  {
    t: "Nhà Giả Kim",
    a: "Paulo Coelho",
    g: "kynang",
    age: "all",
    dur: "4h",
    emoji: "✨",
    cover: "#92400e",
  },
  {
    t: "Đắc Nhân Tâm",
    a: "Dale Carnegie",
    g: "kynang",
    age: "adult",
    dur: "7h",
    emoji: "🤝",
    cover: "#1e40af",
  },
  {
    t: "Nghĩ Giàu Làm Giàu",
    a: "Napoleon Hill",
    g: "kinh_te",
    age: "adult",
    dur: "10h",
    emoji: "💰",
    cover: "#166534",
  },
  {
    t: "7 Thói Quen Hiệu Quả",
    a: "Stephen Covey",
    g: "kynang",
    age: "adult",
    dur: "13h",
    emoji: "🎯",
    cover: "#1d4ed8",
  },
  {
    t: "Đừng Bao Giờ Đi Ăn Một Mình",
    a: "Keith Ferrazzi",
    g: "kynang",
    age: "adult",
    dur: "8h",
    emoji: "🍽️",
    cover: "#7c3aed",
  },
  {
    t: "Mindset: Tư Duy Đúng",
    a: "Carol Dweck",
    g: "tamly",
    age: "adult",
    dur: "9h",
    emoji: "🧠",
    cover: "#4338ca",
  },
  {
    t: "Trí Tuệ Xúc Cảm",
    a: "Daniel Goleman",
    g: "tamly",
    age: "adult",
    dur: "11h",
    emoji: "❤️",
    cover: "#9f1239",
  },
  // Lịch sử
  {
    t: "Lịch Sử Việt Nam",
    a: "Nhiều tác giả",
    g: "lichsu",
    age: "all",
    dur: "18h",
    emoji: "🇻🇳",
    cover: "#dc2626",
  },
  {
    t: "Đại Việt Sử Ký Toàn Thư",
    a: "Ngô Sĩ Liên",
    g: "lichsu",
    age: "adult",
    dur: "24h",
    emoji: "📜",
    cover: "#92400e",
  },
  {
    t: "Hịch Tướng Sĩ",
    a: "Trần Hưng Đạo",
    g: "lichsu",
    age: "all",
    dur: "45p",
    emoji: "🛡️",
    cover: "#b45309",
  },
  {
    t: "Hoàng Lê Nhất Thống Chí",
    a: "Ngô Gia Văn Phái",
    g: "lichsu",
    age: "adult",
    dur: "12h",
    emoji: "🏯",
    cover: "#374151",
  },
  {
    t: "Người Tình",
    a: "Marguerite Duras",
    g: "tinhyeu",
    age: "adult",
    dur: "3h",
    emoji: "💔",
    cover: "#9f1239",
  },
  {
    t: "Mắt Biếc",
    a: "Nguyễn Nhật Ánh",
    g: "tinhyeu",
    age: "teen",
    dur: "5h",
    emoji: "👁️",
    cover: "#0369a1",
  },
  {
    t: "Tôi Thấy Hoa Vàng Trên Cỏ Xanh",
    a: "Nguyễn Nhật Ánh",
    g: "vanhoc",
    age: "kids",
    dur: "8h",
    emoji: "🌻",
    cover: "#d97706",
  },
  {
    t: "Cho Tôi Xin Một Vé Đi Tuổi Thơ",
    a: "Nguyễn Nhật Ánh",
    g: "vanhoc",
    age: "all",
    dur: "4h",
    emoji: "🚌",
    cover: "#0369a1",
  },
  {
    t: "Cà Phê Cùng Tony",
    a: "Tony Buổi Sáng",
    g: "kynang",
    age: "teen",
    dur: "6h",
    emoji: "☕",
    cover: "#92400e",
  },
  {
    t: "Tuổi 20 Yêu Dấu",
    a: "Nguyễn Huy Thiệp",
    g: "vanhoc",
    age: "teen",
    dur: "3h",
    emoji: "🌸",
    cover: "#be185d",
  },
  // Trinh thám
  {
    t: "Thám Tử Sherlock Holmes",
    a: "Arthur Conan Doyle",
    g: "trinh_tham",
    age: "teen",
    dur: "25h",
    emoji: "🔍",
    cover: "#1e3a5f",
  },
  {
    t: "Mười Người Da Đen Nhỏ",
    a: "Agatha Christie",
    g: "trinh_tham",
    age: "adult",
    dur: "6h",
    emoji: "🏝️",
    cover: "#292524",
  },
  {
    t: "Án Mạng Trên Sông Nile",
    a: "Agatha Christie",
    g: "trinh_tham",
    age: "adult",
    dur: "7h",
    emoji: "🚢",
    cover: "#0c4a6e",
  },
  {
    t: "Bộ Ba Thám Tử",
    a: "Alfred Hitchcock",
    g: "trinh_tham",
    age: "teen",
    dur: "8h",
    emoji: "🔦",
    cover: "#1c1917",
  },
  {
    t: "Điều Bí Ẩn Của Cô Nương Trẻ",
    a: "Agatha Christie",
    g: "trinh_tham",
    age: "adult",
    dur: "5h",
    emoji: "🎭",
    cover: "#3b0764",
  },
  // Viễn tưởng
  {
    t: "1984",
    a: "George Orwell",
    g: "vientuong",
    age: "adult",
    dur: "12h",
    emoji: "👁️",
    cover: "#1c1917",
  },
  {
    t: "Trại Súc Vật",
    a: "George Orwell",
    g: "vientuong",
    age: "teen",
    dur: "3h",
    emoji: "🐷",
    cover: "#374151",
  },
  {
    t: "Brave New World",
    a: "Aldous Huxley",
    g: "vientuong",
    age: "adult",
    dur: "9h",
    emoji: "🧬",
    cover: "#0c4a6e",
  },
  {
    t: "Dune",
    a: "Frank Herbert",
    g: "vientuong",
    age: "adult",
    dur: "21h",
    emoji: "🏜️",
    cover: "#92400e",
  },
  {
    t: "The Martian",
    a: "Andy Weir",
    g: "vientuong",
    age: "teen",
    dur: "10h",
    emoji: "🚀",
    cover: "#dc2626",
  },
  {
    t: "Enders Game",
    a: "Orson Scott Card",
    g: "vientuong",
    age: "teen",
    dur: "10h",
    emoji: "🛸",
    cover: "#1e3a5f",
  },
  // Tâm lý / phát triển bản thân
  {
    t: "Atomic Habits",
    a: "James Clear",
    g: "kynang",
    age: "adult",
    dur: "5h",
    emoji: "⚡",
    cover: "#166534",
  },
  {
    t: "The Power of Now",
    a: "Eckhart Tolle",
    g: "tamly",
    age: "adult",
    dur: "7h",
    emoji: "🌅",
    cover: "#d97706",
  },
  {
    t: "Man Search for Meaning",
    a: "Viktor Frankl",
    g: "tamly",
    age: "adult",
    dur: "4h",
    emoji: "🕊️",
    cover: "#374151",
  },
  {
    t: "Thinking Fast and Slow",
    a: "Daniel Kahneman",
    g: "tamly",
    age: "adult",
    dur: "13h",
    emoji: "⚖️",
    cover: "#1e40af",
  },
  {
    t: "Quiet: Sức Mạnh Nội Tâm",
    a: "Susan Cain",
    g: "tamly",
    age: "adult",
    dur: "11h",
    emoji: "🤫",
    cover: "#4338ca",
  },
  {
    t: "How to Win Friends",
    a: "Dale Carnegie",
    g: "kynang",
    age: "adult",
    dur: "8h",
    emoji: "🌟",
    cover: "#d97706",
  },
  // Tình yêu
  {
    t: "Thư Gửi Người Đàn Bà Lạ",
    a: "Stefan Zweig",
    g: "tinhyeu",
    age: "adult",
    dur: "2h",
    emoji: "💌",
    cover: "#9f1239",
  },
  {
    t: "Mãi Mãi Là Bao Lâu",
    a: "Nguyễn Danh Lam",
    g: "tinhyeu",
    age: "teen",
    dur: "4h",
    emoji: "♾️",
    cover: "#be185d",
  },
  {
    t: "Chuyện Tình Yêu Thời Thổ Tả",
    a: "Gabriel García Márquez",
    g: "tinhyeu",
    age: "adult",
    dur: "14h",
    emoji: "💛",
    cover: "#b45309",
  },
  {
    t: "Twilight",
    a: "Stephenie Meyer",
    g: "tinhyeu",
    age: "teen",
    dur: "9h",
    emoji: "🌙",
    cover: "#1c1917",
  },
  {
    t: "The Notebook",
    a: "Nicholas Sparks",
    g: "tinhyeu",
    age: "teen",
    dur: "5h",
    emoji: "📓",
    cover: "#0369a1",
  },
  // Kinh tế
  {
    t: "Rich Dad Poor Dad",
    a: "Robert Kiyosaki",
    g: "kinh_te",
    age: "adult",
    dur: "6h",
    emoji: "🏠",
    cover: "#166534",
  },
  {
    t: "Freakonomics",
    a: "Steven Levitt",
    g: "kinh_te",
    age: "adult",
    dur: "7h",
    emoji: "📊",
    cover: "#1e40af",
  },
  {
    t: "Tư Duy Nhanh & Chậm",
    a: "Daniel Kahneman",
    g: "kinh_te",
    age: "adult",
    dur: "13h",
    emoji: "💭",
    cover: "#4338ca",
  },
  {
    t: "Zero to One",
    a: "Peter Thiel",
    g: "kinh_te",
    age: "adult",
    dur: "5h",
    emoji: "🦄",
    cover: "#0c4a6e",
  },
  {
    t: "Good to Great",
    a: "Jim Collins",
    g: "kinh_te",
    age: "adult",
    dur: "10h",
    emoji: "📈",
    cover: "#166534",
  },
  // Phiêu lưu
  {
    t: "Robinson Crusoe",
    a: "Daniel Defoe",
    g: "phieuluu",
    age: "teen",
    dur: "9h",
    emoji: "🏝️",
    cover: "#92400e",
  },
  {
    t: "Treasure Island",
    a: "R.L. Stevenson",
    g: "phieuluu",
    age: "kids",
    dur: "6h",
    emoji: "💎",
    cover: "#b45309",
  },
  {
    t: "Around the World in 80 Days",
    a: "Jules Verne",
    g: "phieuluu",
    age: "teen",
    dur: "7h",
    emoji: "🌍",
    cover: "#0369a1",
  },
  {
    t: "The Old Man and the Sea",
    a: "Ernest Hemingway",
    g: "vanhoc",
    age: "adult",
    dur: "3h",
    emoji: "🎣",
    cover: "#0c4a6e",
  },
  {
    t: "Into the Wild",
    a: "Jon Krakauer",
    g: "phieuluu",
    age: "adult",
    dur: "8h",
    emoji: "🌲",
    cover: "#166534",
  },
  // Manga
  {
    t: "Doraemon Truyện Ngắn",
    a: "Fujiko F. Fujio",
    g: "manga",
    age: "kids",
    dur: "2h",
    emoji: "🤖",
    cover: "#0369a1",
  },
  {
    t: "Thám Tử Lừng Danh Conan",
    a: "Gosho Aoyama",
    g: "manga",
    age: "teen",
    dur: "4h",
    emoji: "🔍",
    cover: "#1e40af",
  },
  {
    t: "Dragon Ball",
    a: "Akira Toriyama",
    g: "manga",
    age: "teen",
    dur: "6h",
    emoji: "🐉",
    cover: "#d97706",
  },
  {
    t: "One Piece",
    a: "Eiichiro Oda",
    g: "manga",
    age: "teen",
    dur: "8h",
    emoji: "⚓",
    cover: "#dc2626",
  },
  {
    t: "Naruto",
    a: "Masashi Kishimoto",
    g: "manga",
    age: "teen",
    dur: "7h",
    emoji: "🍃",
    cover: "#d97706",
  },
  // Sức khỏe
  {
    t: "Ăn Gì Để Sống Lâu",
    a: "Michael Greger",
    g: "suc_khoe",
    age: "all",
    dur: "11h",
    emoji: "🥗",
    cover: "#166534",
  },
  {
    t: "Thể Dục Khoa Học",
    a: "Michael Roizen",
    g: "suc_khoe",
    age: "adult",
    dur: "8h",
    emoji: "💪",
    cover: "#166534",
  },
  {
    t: "Ngủ Đủ Giấc",
    a: "Matthew Walker",
    g: "suc_khoe",
    age: "adult",
    dur: "9h",
    emoji: "😴",
    cover: "#1e3a5f",
  },
  {
    t: "Phương Pháp Thiền Định",
    a: "Thích Nhất Hạnh",
    g: "tonggiao",
    age: "all",
    dur: "5h",
    emoji: "🧘",
    cover: "#d97706",
  },
  {
    t: "Đường Xưa Mây Trắng",
    a: "Thích Nhất Hạnh",
    g: "tonggiao",
    age: "all",
    dur: "14h",
    emoji: "☁️",
    cover: "#e7e5e4",
  },
  // Truyện cười
  {
    t: "Truyện Cười Dân Gian Việt Nam",
    a: "Nhiều tác giả",
    g: "truyen_cuoi",
    age: "all",
    dur: "3h",
    emoji: "😄",
    cover: "#d97706",
  },
  {
    t: "Bộ Sưu Tập Hài Hước",
    a: "Tuyển chọn",
    g: "truyen_cuoi",
    age: "all",
    dur: "4h",
    emoji: "🤣",
    cover: "#dc2626",
  },
  {
    t: "Truyện Tiếu Lâm Việt Nam",
    a: "Nhiều tác giả",
    g: "truyen_cuoi",
    age: "adult",
    dur: "5h",
    emoji: "😂",
    cover: "#b45309",
  },
];

// Generate 1000 books from templates
const EXTRA_TITLES = {
  vanhoc: [
    "Bức Thư Tình",
    "Đêm Qua Sân Trước Nở Đầy Hoa",
    "Mùa Thu Cuối Cùng",
    "Tiếng Vọng",
    "Chiều Chiều",
    "Thương Nhớ Mười Hai",
    "Cõi Người Ta",
    "Bóng Đè",
    "Linh Sơn",
    "Hoa Đào Năm Ngoái",
    "Nỗi Buồn Chiến Tranh",
    "Đất Nước Đứng Lên",
    "Những Mảnh Vỡ",
    "Tầng Đầu Địa Ngục",
    "Đêm Trắng",
  ],
  thieunhi: [
    "Búp Bê Biết Hát",
    "Cún Con Đi Học",
    "Chim Sẻ Nhỏ",
    "Mèo Vàng Tinh Nghịch",
    "Gấu Bông Đi Dã Ngoại",
    "Thỏ Con Và Cà Rốt",
    "Ong Bướm Bay Bay",
    "Cá Vàng Ước Mơ",
    "Sư Tử Bé Thơ",
    "Voi Con Học Bài",
  ],
  khoahoc: [
    "Vũ Trụ Học",
    "Tiến Hóa Loài Người",
    "Não Bộ Con Người",
    "Di Truyền Học",
    "Vật Lý Lượng Tử",
    "Hóa Học Xung Quanh Ta",
    "Sinh Học Đại Cương",
    "Thiên Văn Học",
    "Địa Chất Học",
    "Khí Hậu Học",
  ],
  lichsu: [
    "Hải Thượng Lãn Ông",
    "Nguyễn Trãi Toàn Tập",
    "Bình Ngô Đại Cáo",
    "Lịch Sử Hà Nội",
    "Sài Gòn Năm Xưa",
    "Cố Đô Huế",
    "Làng Xưa Phố Cũ",
    "Người Việt Xưa",
    "Di Sản Văn Hóa",
    "Huyền Thoại Dân Tộc",
  ],
  kynang: [
    "Nghệ Thuật Lãnh Đạo",
    "Quản Lý Thời Gian",
    "Giao Tiếp Hiệu Quả",
    "Tư Duy Sáng Tạo",
    "Học Cách Học",
    "Tập Trung Cao Độ",
    "Vượt Qua Sợ Hãi",
    "Xây Dựng Thói Quen",
    "Kỷ Luật Tự Giác",
    "Mục Tiêu Rõ Ràng",
  ],
  tinhyeu: [
    "Tình Đầu",
    "Ký Ức Mùa Hè",
    "Nắng Tháng Năm",
    "Hơi Thở Cuối",
    "Lạc Nhau Mùa Đông",
    "Yêu Trong Nắng",
    "Giữ Lại Cho Em",
    "Khoảng Trời Riêng",
    "Bình Yên Bên Anh",
    "Tình Yêu Xa",
  ],
  phieuluu: [
    "Thám Hiểm Đại Dương",
    "Hành Trình Bắc Cực",
    "Leo Núi Everest",
    "Vượt Sa Mạc",
    "Khám Phá Rừng Amazon",
    "Thám Hiểm Vũ Trụ",
    "Du Thuyền Vòng Quanh Thế Giới",
    "Săn Kho Báu",
    "Chinh Phục Đỉnh Cao",
    "Cuộc Phiêu Lưu Kỳ Thú",
  ],
  trinh_tham: [
    "Vụ Án Bí Ẩn",
    "Kẻ Đứng Sau Bóng Tối",
    "Bí Mật Căn Phòng Khóa",
    "Dấu Vết Tội Ác",
    "Gương Mặt Thứ Ba",
    "Đêm Không Ngủ",
    "Lần Theo Dấu Vết",
    "Mê Cung Tội Ác",
    "Bẫy Chết",
    "Điều Tra Sự Thật",
  ],
  vientuong: [
    "Thế Giới Tương Lai",
    "Robot Nổi Loạn",
    "Trí Tuệ Nhân Tạo",
    "Du Hành Thời Gian",
    "Hành Tinh Mới",
    "Chiến Tranh Ngân Hà",
    "Người Thay Thế",
    "Tâm Trí Số Hóa",
    "Thành Phố Dưới Biển",
    "Kỷ Nguyên Mới",
  ],
  tamly: [
    "Bình An Nội Tâm",
    "Chữa Lành Vết Thương",
    "Vượt Qua Trầm Cảm",
    "Yêu Bản Thân",
    "Cân Bằng Cuộc Sống",
    "Thoát Khỏi Lo Âu",
    "Sức Mạnh Ý Chí",
    "Kiểm Soát Cảm Xúc",
    "Tư Duy Tích Cực",
    "Nghệ Thuật Sống",
  ],
  tonggiao: [
    "Kinh Phật Cho Người Mới",
    "Thiền Định Cơ Bản",
    "Giáo Lý Phật Đà",
    "Con Đường Giải Thoát",
    "Tĩnh Tâm Mỗi Ngày",
    "Bình An Trong Tâm",
    "Sống Trong Hiện Tại",
    "Vô Thường",
    "Từ Bi Hỷ Xả",
    "Giác Ngộ",
  ],
  kinh_te: [
    "Khởi Nghiệp Thành Công",
    "Marketing Số",
    "Đầu Tư Chứng Khoán",
    "Kinh Doanh Online",
    "Quản Lý Tài Chính",
    "Xây Dựng Thương Hiệu",
    "Lãnh Đạo Doanh Nghiệp",
    "Chiến Lược Kinh Doanh",
    "Tài Chính Cá Nhân",
    "Phát Triển Sự Nghiệp",
  ],
  nuoicon: [
    "Nuôi Con Thông Minh",
    "Dạy Con Tự Lập",
    "Tâm Lý Trẻ Em",
    "Phát Triển Ngôn Ngữ",
    "Dinh Dưỡng Trẻ Em",
    "Giáo Dục Sớm",
    "Kỷ Luật Tích Cực",
    "Hiểu Con Mình",
    "Đồng Hành Cùng Con",
    "Tình Yêu Và Giới Hạn",
  ],
  du_lich: [
    "Khám Phá Hà Nội",
    "Sài Gòn Đêm",
    "Hội An Cổ Kính",
    "Đà Lạt Mộng Mơ",
    "Huế Thơ Mộng",
    "Vịnh Hạ Long",
    "Mù Cang Chải",
    "Sapa Mây Mù",
    "Phú Quốc Biển Xanh",
    "Côn Đảo Lịch Sử",
  ],
  am_nhac: [
    "Lịch Sử Âm Nhạc",
    "Nhạc Cụ Dân Tộc",
    "Thanh Nhạc Cơ Bản",
    "Guitar Cho Người Mới",
    "Piano Học Từ Đầu",
    "Nhạc Lý Cơ Bản",
    "Âm Nhạc Trị Liệu",
    "Âm Nhạc Cổ Điển",
    "Rock và Jazz",
    "Nhạc Dân Ca Việt Nam",
  ],
  the_thao: [
    "Bóng Đá Việt Nam",
    "Cẩm Nang Yoga",
    "Chạy Bộ Đúng Cách",
    "Bơi Lội Cho Người Mới",
    "Võ Thuật Cơ Bản",
    "Thể Hình Tại Nhà",
    "Đạp Xe Đường Dài",
    "Cầu Lông Kỹ Thuật",
    "Tennis Cơ Bản",
    "Bóng Rổ Nhập Môn",
  ],
  am_thuc: [
    "Ẩm Thực Việt Nam",
    "Nấu Ăn Cơ Bản",
    "1001 Món Chay",
    "Bánh Ngọt Handmade",
    "Pha Cà Phê Nghệ Thuật",
    "Nấu Bún Bò Huế",
    "Phở Hà Nội Chính Gốc",
    "Hải Sản Tươi Ngon",
    "Ẩm Thực Nhật Bản",
    "Bánh Mì Tự Làm",
  ],
  suc_khoe: [
    "Yoga Mỗi Sáng",
    "Chế Độ Ăn Keto",
    "Thiền Buổi Tối",
    "Sức Khỏe Tâm Thần",
    "Phòng Ngừa Bệnh",
    "Tập Hít Thở",
    "Chạy Marathon",
    "Sức Đề Kháng Tự Nhiên",
    "Detox Cơ Thể",
    "Ngủ Ngon Mỗi Đêm",
  ],
  triet_hoc: [
    "Triết Học Nhập Môn",
    "Đạo Đức Học",
    "Tư Duy Logic",
    "Triết Học Phương Đông",
    "Stoicism Cổ Đại",
    "Nietzsche Nhập Môn",
    "Socrates Và Triết Học",
    "Lão Tử Đạo Đức Kinh",
    "Phật Giáo Triết Học",
    "Thực Hành Stoic",
  ],
  kinh_dien: [
    "Tứ Thư Ngũ Kinh",
    "Luận Ngữ",
    "Đạo Đức Kinh",
    "Binh Pháp Tôn Tử",
    "Kinh Dịch",
    "Sử Ký Tư Mã Thiên",
    "Thuyết Uyển",
    "Hàn Phi Tử",
    "Mặc Tử",
    "Trang Tử",
  ],
  manga: [
    "Slam Dunk",
    "Fullmetal Alchemist",
    "Death Note",
    "Attack on Titan",
    "My Hero Academia",
    "Bleach",
    "Fairy Tail",
    "Black Clover",
    "Demon Slayer",
    "Jujutsu Kaisen",
  ],
  co_tich: [
    "Thần Đèn Aladdin",
    "Alibaba Và 40 Tên Cướp",
    "Sinbad Thủy Thủ",
    "Ngàn Lẻ Một Đêm",
    "Cô Bé Ngủ Trong Rừng",
    "Nàng Tiên Cá",
    "Nàng Lọ Lem",
    "Cậu Bé Ngón Tay Cái",
    "Bà Tiên Giáo Mẫu",
    "Hoàng Tử Ếch",
  ],
  truyen_cuoi: [
    "Trạng Quỳnh",
    "Ba Giai Tú Xuất",
    "Anh Học Trò Và Ông Thầy",
    "Truyện Tiếu Lâm",
    "Tú Bà",
    "Bịp Bợm Vặt",
    "Hài Hước Mỗi Ngày",
    "Cười Là Khỏe",
    "Truyện Vui Hà Nội",
    "Bông Đùa Nhẹ Nhàng",
  ],
};

const AUTHORS = {
  vanhoc: [
    "Nguyễn Du",
    "Nam Cao",
    "Vũ Trọng Phụng",
    "Ngô Tất Tố",
    "Hồ Xuân Hương",
    "Nguyễn Tuân",
    "Xuân Diệu",
    "Huy Cận",
    "Tô Hoài",
    "Nguyên Ngọc",
  ],
  thieunhi: [
    "Tô Hoài",
    "Nguyễn Nhật Ánh",
    "Phạm Hổ",
    "Trần Đăng Khoa",
    "Võ Quảng",
    "Định Hải",
    "Dương Thị Xuân Quý",
    "Nguyễn Trọng Tạo",
  ],
  khoahoc: [
    "Nguyễn Lân",
    "Nguyễn Xuân Sanh",
    "GS. Trương Quang",
    "TS. Lê Minh",
    "PGS. Nguyễn Văn An",
  ],
  lichsu: [
    "Lê Thành Khôi",
    "Trần Quốc Vượng",
    "Đinh Xuân Lâm",
    "Phan Huy Lê",
    "Hà Văn Tấn",
  ],
  kynang: [
    "Tony Buổi Sáng",
    "Nguyễn Phi Vân",
    "Thái Lâm Toàn",
    "Trần Đình Lâm",
  ],
  default: [
    "Nhiều tác giả",
    "Tuyển tập",
    "NXB Văn Học",
    "NXB Kim Đồng",
    "NXB Trẻ",
  ],
};

function getAuthor(genre) {
  const list = AUTHORS[genre] || AUTHORS.default;
  return list[Math.floor(Math.random() * list.length)];
}

function getDuration() {
  const h = Math.floor(Math.random() * 18) + 1;
  const m = Math.floor(Math.random() * 6) * 10;
  return m > 0 ? `${h}h ${m}p` : `${h}h`;
}

function getAge(genre) {
  if (["thieunhi", "co_tich", "manga"].includes(genre))
    return Math.random() < 0.7 ? "kids" : "teen";
  if (["tinhyeu", "trinh_tham", "vientuong", "triet_hoc"].includes(genre))
    return Math.random() < 0.8 ? "adult" : "teen";
  if (["kynang", "kinh_te", "suc_khoe", "tamly"].includes(genre))
    return Math.random() < 0.9 ? "adult" : "all";
  return Math.random() < 0.4 ? "all" : Math.random() < 0.5 ? "adult" : "teen";
}

const COVER_COLORS = [
  "#1e3a5f",
  "#166534",
  "#7c3aed",
  "#9f1239",
  "#92400e",
  "#1e40af",
  "#4338ca",
  "#0e7490",
  "#374151",
  "#292524",
  "#4c1d95",
  "#b45309",
  "#dc2626",
  "#065f46",
  "#3b0764",
];

function getColor(genre) {
  const map = {
    vanhoc: "#7c3aed",
    thieunhi: "#d97706",
    khoahoc: "#0369a1",
    lichsu: "#b45309",
    kynang: "#166534",
    tinhyeu: "#be185d",
    phieuluu: "#c2410c",
    trinh_tham: "#1e3a5f",
    vientuong: "#4c1d95",
    tamly: "#1e40af",
    tonggiao: "#92400e",
    kinh_te: "#166534",
    nuoicon: "#9f1239",
    du_lich: "#0e7490",
    am_nhac: "#7e22ce",
    the_thao: "#1d4ed8",
    am_thuc: "#b45309",
    suc_khoe: "#15803d",
    triet_hoc: "#4338ca",
    kinh_dien: "#7c3aed",
    manga: "#e11d48",
    co_tich: "#d97706",
    truyen_cuoi: "#0369a1",
  };
  return map[genre] || "#374151";
}

function getEmoji(genre) {
  const map = {
    vanhoc: "📖",
    thieunhi: "🌈",
    khoahoc: "🔬",
    lichsu: "🏛️",
    kynang: "💡",
    tinhyeu: "💕",
    phieuluu: "⚔️",
    trinh_tham: "🔍",
    vientuong: "🚀",
    tamly: "🧠",
    tonggiao: "🙏",
    kinh_te: "📈",
    nuoicon: "👶",
    du_lich: "✈️",
    am_nhac: "🎵",
    the_thao: "⚽",
    am_thuc: "🍜",
    suc_khoe: "💪",
    triet_hoc: "🤔",
    kinh_dien: "📜",
    manga: "🎌",
    co_tich: "🧚",
    truyen_cuoi: "😄",
  };
  return map[genre] || "📚";
}

// Build 1000 books
const allBooks = [
  ...BOOK_TEMPLATES.map((b, i) => ({
    id: i,
    ...b,
    cover: b.cover || getColor(b.g),
  })),
];
let id = BOOK_TEMPLATES.length;
for (const [genre, titles] of Object.entries(EXTRA_TITLES)) {
  for (const title of titles) {
    const age = getAge(genre);
    allBooks.push({
      id: id++,
      t: title,
      a: getAuthor(genre),
      g: genre,
      age,
      dur: getDuration(),
      emoji: getEmoji(genre),
      cover: getColor(genre),
    });
  }
}
// Fill to 1000
const allGenreIds = Object.keys(EXTRA_TITLES);
while (allBooks.length < 1000) {
  const genre = allGenreIds[allBooks.length % allGenreIds.length];
  const titles = EXTRA_TITLES[genre];
  const suffix = Math.floor(allBooks.length / 100) + 1;
  const baseTitle = titles[allBooks.length % titles.length];
  const age = getAge(genre);
  allBooks.push({
    id: id++,
    t: `${baseTitle} (Tập ${suffix})`,
    a: getAuthor(genre),
    g: genre,
    age,
    dur: getDuration(),
    emoji: getEmoji(genre),
    cover: getColor(genre),
  });
}

// State
let filtered = [...allBooks];
let currentGenre = "all";
let currentPage = 1;
let searchQ = "";
const PAGE_SIZE = 24;
let currentBook = null;
let isPlaying = false;
let progress = 0;
let progressTimer = null;
let utterance = null;
let readingTimeout = null;

const BOOK_INTROS = {
  vanhoc:
    "Chào mừng bạn đến với tác phẩm văn học kinh điển. Câu chuyện sẽ đưa bạn vào một thế giới đầy cảm xúc và triết lý sâu sắc...",
  thieunhi:
    "Xin chào các bạn nhỏ! Hôm nay chúng ta cùng nhau khám phá một câu chuyện thật thú vị và đáng yêu nhé...",
  khoahoc:
    "Kính chào quý độc giả. Chúng ta sẽ cùng nhau khám phá những bí ẩn kỳ diệu của khoa học và vũ trụ...",
  lichsu:
    "Kính mời quý vị cùng lắng nghe những trang sử hào hùng của dân tộc và nhân loại...",
  kynang:
    "Chào bạn! Hãy cùng nhau học hỏi và áp dụng những kỹ năng quan trọng để thay đổi cuộc sống...",
  tinhyeu:
    "Một câu chuyện tình yêu đẹp và đầy cảm xúc đang chờ bạn. Hãy thả hồn vào từng trang sách...",
  phieuluu:
    "Thắt dây an toàn! Chúng ta sắp bắt đầu một hành trình phiêu lưu đầy kịch tính và hồi hộp...",
  trinh_tham:
    "Một vụ án bí ẩn đang chờ được giải mã. Hãy cùng nhà thám tử theo dõi từng manh mối...",
  vientuong:
    "Hãy mở rộng trí tưởng tượng và bước vào một thế giới tương lai đầy kỳ diệu và bất ngờ...",
  default:
    "Kính chào quý độc giả. Hôm nay chúng ta sẽ cùng nhau thưởng thức một cuốn sách thú vị...",
};

function getIntro(genre) {
  return BOOK_INTROS[genre] || BOOK_INTROS.default;
}

// Render genres
function renderGenres() {
  const bar = document.getElementById("genresBar");
  bar.innerHTML = GENRES.map(
    (g) =>
      `<button class="genre-btn${g.id === currentGenre ? " active" : ""}" onclick="setGenre('${g.id}')">${g.label}</button>`,
  ).join("");
}

function setGenre(id) {
  currentGenre = id;
  currentPage = 1;
  applyFilter();
  renderGenres();
}

function applyFilter() {
  filtered = allBooks.filter((b) => {
    const matchGenre = currentGenre === "all" || b.g === currentGenre;
    const q = searchQ.toLowerCase();
    const matchSearch =
      !q || b.t.toLowerCase().includes(q) || b.a.toLowerCase().includes(q);
    return matchGenre && matchSearch;
  });
  renderBooks();
  renderPagination();
  const gc = GENRES.find((g) => g.id === currentGenre);
  document.getElementById("sectionTitle").textContent = gc
    ? gc.label.replace(/^[^\s]+\s/, "")
    : "Tất cả sách";
  document.getElementById("countBadge").textContent = filtered.length + " cuốn";
}

function renderBooks() {
  const start = (currentPage - 1) * PAGE_SIZE;
  const page = filtered.slice(start, start + PAGE_SIZE);
  const grid = document.getElementById("booksGrid");
  grid.innerHTML = page
    .map((b) => {
      const ageInfo = AGE_GROUPS[b.age] || AGE_GROUPS.all;
      const playing = currentBook && currentBook.id === b.id;
      return `<div class="book-card${playing ? " playing" : ""}" onclick="selectBook(${b.id})">
      <div class="book-cover" style="background:${b.cover}20; border-bottom:1px solid ${b.cover}40">
        <span style="font-size:32px">${b.emoji}</span>
        <div class="book-cover-label" style="background:${b.cover}cc">${GENRES.find((g) => g.id === b.g)?.label.replace(/^[^\s]+\s/, "") || b.g}</div>
      </div>
      <div class="book-info">
        <div class="book-title">${b.t}</div>
        <div class="book-author">${b.a}</div>
        <div class="book-meta">
          <span class="book-age ${ageInfo.cls}">${ageInfo.label}</span>
          <span class="book-dur">⏱ ${b.dur}</span>
        </div>
        <button class="play-btn-mini" style="background:${playing ? b.cover + "22" : "var(--color-background-secondary)"}; color:${playing ? b.cover : "var(--color-text-secondary)"}; border:0.5px solid ${playing ? b.cover + "44" : "var(--color-border-tertiary)"}" onclick="event.stopPropagation(); selectBook(${b.id})">
          <i class="ti ti-${playing && isPlaying ? "player-pause" : "player-play"}" style="font-size:13px" aria-hidden="true"></i>
          ${playing && isPlaying ? "Đang nghe" : "Nghe ngay"}
        </button>
      </div>
    </div>`;
    })
    .join("");
}

function renderPagination() {
  const total = Math.ceil(filtered.length / PAGE_SIZE);
  const pg = document.getElementById("pagination");
  if (total <= 1) {
    pg.innerHTML = "";
    return;
  }
  let html = `<button class="page-btn" onclick="goPage(${currentPage - 1})" ${currentPage <= 1 ? "disabled" : ""}><i class="ti ti-chevron-left" style="font-size:14px" aria-hidden="true"></i></button>`;
  const range = [];
  for (
    let i = Math.max(1, currentPage - 2);
    i <= Math.min(total, currentPage + 2);
    i++
  )
    range.push(i);
  if (range[0] > 1) {
    html += `<button class="page-btn" onclick="goPage(1)">1</button>`;
    if (range[0] > 2) html += `<span class="page-info">…</span>`;
  }
  range.forEach((p) => {
    html += `<button class="page-btn${p === currentPage ? " active" : ""}" onclick="goPage(${p})">${p}</button>`;
  });
  if (range[range.length - 1] < total) {
    if (range[range.length - 1] < total - 1)
      html += `<span class="page-info">…</span>`;
    html += `<button class="page-btn" onclick="goPage(${total})">${total}</button>`;
  }
  html += `<button class="page-btn" onclick="goPage(${currentPage + 1})" ${currentPage >= total ? "disabled" : ""}><i class="ti ti-chevron-right" style="font-size:14px" aria-hidden="true"></i></button>`;
  pg.innerHTML = html;
}

function goPage(p) {
  const total = Math.ceil(filtered.length / PAGE_SIZE);
  if (p < 1 || p > total) return;
  currentPage = p;
  renderBooks();
  renderPagination();
  document
    .getElementById("booksGrid")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

function selectBook(id) {
  const b = allBooks.find((x) => x.id === id);
  if (!b) return;
  if (currentBook && currentBook.id === id) {
    togglePlay();
    return;
  }
  currentBook = b;
  isPlaying = false;
  progress = 0;
  stopReading();
  renderPlayer();
  renderBooks();
  setTimeout(() => togglePlay(), 100);
}

function togglePlay() {
  if (!currentBook) return;
  isPlaying = !isPlaying;
  if (isPlaying) startReading();
  else stopReading();
  renderPlayer();
  renderBooks();
}

function stopReading() {
  if (window.speechSynthesis) speechSynthesis.cancel();
  clearInterval(progressTimer);
  clearTimeout(readingTimeout);
}

function startReading() {
  stopReading();
  const text =
    getIntro(currentBook.g) +
    ' "' +
    currentBook.t +
    '" của tác giả ' +
    currentBook.a +
    ". " +
    generateText(currentBook);
  if (window.speechSynthesis) {
    utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "vi-VN";
    utterance.rate = parseFloat(
      document.getElementById("speedVal")?.textContent || "1.0",
    );
    utterance.pitch = 1.05;
    utterance.volume = parseFloat(
      document.getElementById("volSlider")?.value || "0.85",
    );
    const voices = speechSynthesis.getVoices();
    const vi = voices.find((v) => v.lang.startsWith("vi"));
    if (vi) utterance.voice = vi;
    utterance.onend = () => {
      isPlaying = false;
      renderPlayer();
      renderBooks();
    };
    speechSynthesis.speak(utterance);
  }
  // Animate progress
  const totalSecs = parseDuration(currentBook.dur);
  const step = 100 / (totalSecs * 2);
  progressTimer = setInterval(() => {
    progress = Math.min(100, progress + step);
    const fill = document.getElementById("progressFill");
    const cur = document.getElementById("currentTime");
    if (fill) fill.style.width = progress + "%";
    if (cur)
      cur.textContent = formatTime(Math.floor((progress / 100) * totalSecs));
    if (progress >= 100) {
      clearInterval(progressTimer);
      isPlaying = false;
      renderPlayer();
      renderBooks();
    }
  }, 500);
  animateText(text);
}

function animateText(full) {
  const el = document.getElementById("readingText");
  if (!el) return;
  let i = 0;
  el.textContent = "";
  function next() {
    if (i < Math.min(full.length, 200) && isPlaying) {
      el.textContent = full.slice(0, i + 1);
      i++;
      readingTimeout = setTimeout(next, 40);
    } else if (i >= 200) {
      el.textContent = full.slice(0, 200) + "...";
    }
  }
  next();
}

function generateText(b) {
  const intros = [
    `Câu chuyện bắt đầu vào một buổi sáng yên bình, khi ánh nắng nhẹ nhàng chiếu qua ô cửa sổ...`,
    `Ngày hôm đó thật đặc biệt, không ai ngờ rằng cuộc đời sẽ thay đổi từ đây...`,
    `Có những khoảnh khắc trong cuộc sống mà ta không bao giờ quên được...`,
    `Hành trình bắt đầu từ một quyết định nhỏ, nhưng đã thay đổi tất cả...`,
    `Trong thế giới ấy, mọi thứ đều có thể xảy ra nếu bạn tin tưởng đủ mạnh...`,
  ];
  return intros[b.id % intros.length];
}

function parseDuration(dur) {
  const m = dur.match(/(\d+)h(?:\s*(\d+)p)?/);
  if (!m) return 3600;
  return parseInt(m[1] || 0) * 3600 + parseInt(m[2] || 0) * 60;
}

function formatTime(secs) {
  const h = Math.floor(secs / 3600),
    m = Math.floor((secs % 3600) / 60),
    s = secs % 60;
  if (h > 0)
    return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function changeSpeed() {
  const speeds = [0.75, 1.0, 1.25, 1.5, 1.75, 2.0];
  const el = document.getElementById("speedVal");
  if (!el) return;
  const cur = parseFloat(el.textContent);
  const idx = speeds.indexOf(cur);
  const next = speeds[(idx + 1) % speeds.length];
  el.textContent = next
    .toFixed(2)
    .replace(".00", "")
    .replace(/\.(\d)0/, ".$1");
  if (window.speechSynthesis && utterance) {
    speechSynthesis.cancel();
    if (isPlaying) startReading();
  }
}

function renderPlayer() {
  const empty = document.getElementById("playerEmpty");
  const content = document.getElementById("playerContent");
  if (!currentBook) {
    empty.style.display = "block";
    content.style.display = "none";
    return;
  }
  empty.style.display = "none";
  content.style.display = "flex";
  const totalSecs = parseDuration(currentBook.dur);
  const curSecs = Math.floor((progress / 100) * totalSecs);
  content.innerHTML = `
    <div class="player-row1">
      <div class="player-cover" style="background:${currentBook.cover}22; border:0.5px solid ${currentBook.cover}44"><span>${currentBook.emoji}</span></div>
      <div class="player-info">
        <div class="player-title">${currentBook.t}</div>
        <div class="player-author">${currentBook.a} • <span class="voice-label"><i class="ti ti-microphone" style="font-size:11px" aria-hidden="true"></i> AI Tiếng Việt</span></div>
      </div>
      <div class="player-controls">
        <button class="ctrl-btn" onclick="skipBack()" title="Tua lùi 15s"><i class="ti ti-player-skip-back" aria-label="Tua lùi"></i></button>
        <button class="play-main-btn" onclick="togglePlay()" aria-label="${isPlaying ? "Tạm dừng" : "Phát"}">
          <i class="ti ti-${isPlaying ? "player-pause" : "player-play"}"></i>
        </button>
        <button class="ctrl-btn" onclick="skipForward()" title="Tua tới 15s"><i class="ti ti-player-skip-forward" aria-label="Tua tới"></i></button>
      </div>
    </div>
    <div class="progress-row">
      <span class="time-label" id="currentTime">${formatTime(curSecs)}</span>
      <div class="progress-bar" onclick="seekProgress(event)">
        <div class="progress-fill" id="progressFill" style="width:${progress}%"></div>
      </div>
      <span class="time-label" style="text-align:right">${currentBook.dur}</span>
    </div>
    <div class="reading-text" id="readingText"></div>
    <div class="speed-vol">
      <button class="speed-btn" onclick="changeSpeed()">⚡ <span id="speedVal">1.0</span>x</button>
      <div class="vol-row">
        <i class="ti ti-volume" aria-hidden="true"></i>
        <input type="range" id="volSlider" min="0" max="1" step="0.05" value="0.85" style="flex:1" onchange="changeVol(this.value)" />
        <i class="ti ti-volume-3" aria-hidden="true"></i>
      </div>
    </div>
  `;
}

function seekProgress(e) {
  const bar = e.currentTarget;
  const pct = (e.offsetX / bar.offsetWidth) * 100;
  progress = Math.max(0, Math.min(100, pct));
  renderPlayer();
  if (isPlaying) {
    stopReading();
    startReading();
  }
}

function skipBack() {
  progress = Math.max(0, progress - 2);
  renderPlayer();
}
function skipForward() {
  progress = Math.min(100, progress + 2);
  renderPlayer();
}
function changeVol(v) {
  if (utterance) utterance.volume = parseFloat(v);
}

// Search
document.getElementById("searchInput").addEventListener("input", (e) => {
  searchQ = e.target.value;
  currentPage = 1;
  applyFilter();
});

// Init
renderGenres();
applyFilter();
renderPlayer();

// Load voices async
if (window.speechSynthesis) speechSynthesis.onvoiceschanged = () => {};
