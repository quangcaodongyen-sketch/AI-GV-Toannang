import { useState, useEffect } from 'react';
import { Menu, X, School, Sparkles, ExternalLink, Users, BookOpen, Crown, Check, Zap, Star, Gift } from 'lucide-react';

interface AppCard {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  category: string;
  badge?: string;
}

const apps: AppCard[] = [
  {
    id: 'trolysongngupro',
    title: 'CHUYỂN GIÁO ÁN SONG NGỮ',
    description: 'Chuyển đổi giáo án sang dạng song ngữ Việt - Anh ',
    image: '/trolysongngupro.png',
    url: 'https://trolysongngupro.vercel.app/',
    category: 'BỘ TRỢ LÝ AI',
    badge: 'MIỄN PHÍ'
  },
  {
    id: 'webtoword',
    title: 'CHUYỂN CÔNG THỨC AI SANG WORD',
    description: 'Chuyển đổi các kết quả từ ChatGPT, Gemini ra file Word với công thức MathType ',
    image: '/webtoword.png',
    url: 'https://webtoword.vercel.app/',
    category: 'BỘ TRỢ LÝ AI',
    badge: 'MIỄN PHÍ'
  },
  {
    id: 'game4',
    title: 'BIẾN GIÁO ÁN THÀNH 18 GAME TƯƠNG TÁC',
    description: 'Chọn giáo án hoặc phiếu học tập, web tự tạo với 18 game tương tác',
    image: '/edugameai.png',
    url: 'https://taogametuongtac.vercel.app/',
    category: 'GAME EDUCATION',
    badge: 'TRẢI NGHIỆM'
  },
  {
    id: 'game2',
    title: '7 GAME ĐỐI KHÁNG TRONG LỚP',
    description: 'Đấu Trường Tri Thức – Bộ 7 trò chơi trắc nghiệm tương tác chạy ngay trên trình duyệt',
    image: '/gamedoikhang.png',
    url: 'https://gamedoikhangpro.vercel.app/',
    category: 'GAME EDUCATION',
    badge: 'MIỄN PHÍ'
  },
  {
    id: 'game',
    title: '12 GAME GỌI TÊN HỌC SINH NGẪU NHIÊN',
    description: 'Thay đổi cách gọi học sinh lên bảng với 12 phong cách vui nhộn',
    image: '/random.png',
    url: 'https://randomhocsinh.vercel.app/',
    category: 'GAME EDUCATION',
    badge: 'MIỄN PHÍ'
  },
  {
    id: 'toan-nang',
    title: 'TẠO ĐỀ THI TOÀN NĂNG',
    description: 'App tạo đề thi vào 10, đề tốt nghiệp THPT, đề học kì các môn các cấp',
    image: '/toannang.png',
    url: 'https://taodethitoannang.vercel.app/',
    category: 'TẠO ĐỀ THI',
    badge: 'TRẢI NGHIỆM MIỄN PHÍ'
  },
  {
    id: 'thi-gvg',
    title: 'VIẾT BIỆN PHÁP GV GIỎI-GVCN GIỎI',
    description: 'App viết biện pháp thi GVG-GVCN với 47 phương pháp và kĩ thuật dạy học mới nhất',
    image: '/vietbienphap.PNG',
    url: 'https://trolyvietbienphap.vercel.app/',
    category: 'TẠO SKKN',
    badge: 'LIÊN HỆ SỬ DỤNG'
  },
  {
    id: 'video-giao-duc',
    title: 'XƯỞNG SẢN XUẤT VIDEO GIÁO DỤC',
    description: 'Tự động hóa quy trình sản xuất kịch bản, promt đồng nhất nhân vật',
    image: '/sanxuatvideo.PNG',
    url: 'https://eduvideostudio.vercel.app/',
    category: 'TẠO SẢN PHẨM GIÁO DỤC',
    badge: 'LIÊN HỆ SỬ DỤNG'
  },
  {
    id: 'soan-giao-an',
    title: 'TẠO GIÁO ÁN TỰ ĐỘNG CÁC MÔN CÁC CẤP',
    description: 'Tự động hóa quy trình soạn thảo giáo án tất cả các môn chuẩn cấu trúc',
    image: '/sinhgiaoan.PNG',
    url: 'https://sinhgiaoanpro.vercel.app/',
    category: 'TẠO GIÁO ÁN',
    badge: 'TRẢI NGHIỆM'
  },
  {
    id: 'game3',
    title: 'BỘ 15 GAME TƯƠNG TÁC',
    description: 'Khám phá thế giới kiến thức qua những trò chơi vui nhộn và đầy thử thách',
    image: '/hocvui.PNG',
    url: 'https://hocvuimoingaypro.vercel.app/',
    category: 'GAME EDUCATION',
    badge: 'MIỄN PHÍ'
  },
  {
    id: 'ke-hoach-pro',
    title: 'KẾ HOẠCH BÀI GIẢNG PRO',
    description: 'CHỈ CẦN 1 CÚ CLICK, GIÁO ÁN HOÀN CHỈNH NGAY LẬP TỨC VỚI 47 PHƯƠNG PHÁP VÀ KỸ THUẬT THỰC CHIẾN, DÀNH CHO THI GVG, DỰ GIỜ, NGHIÊN CỨU CHUYÊN MÔN, ĐỔI MỚI PHƯƠNG PHÁP DẠY HỌC',
    image: '/kehoachbaigiangpro.PNG',
    url: 'https://kehoachbaigiangpro.vercel.app/',
    category: 'TẠO GIÁO ÁN',
    badge: 'LIÊN HỆ ĐỂ SỬ DỤNG'
  },
  {
    id: 'rung-chuong-vang',
    title: 'RUNG CHUÔNG VÀNG ONLINE',
    description: 'Game Rung chuông vàng online dành cho giáo viên',
    image: '/rungchuongvang.PNG',
    url: 'https://rungchuongvangpro.vercel.app/',
    category: 'GAME EDUCATION',
    badge: 'MIỄN PHÍ'
  },
  {
    id: 'tao-de-thi',
    title: 'TẠO ĐỀ THI THEO CV 7991',
    description: 'Ứng dụng AI hỗ trợ tạo ma trận, đặc tả, đề thi theo công văn 7991',
    image: '/taodethi2026.png',
    url: 'https://taodethi2026.vercel.app/',
    category: 'TẠO ĐỀ THI',
    badge: 'MIỄN PHÍ'
  },
  {
    id: 'pdf to word',
    title: 'CHUYỂN PDF SANG WORD',
    description: 'Ứng dụng AI hỗ trợ Chuyển đổi PDF sang Word (.docx) — AI xử lý công thức toán học',
    image: '/pdf.PNG',
    url: 'https://pdftowordtht.vercel.app/',
    category: 'BỘ TRỢ LÝ AI',
    badge: 'MIỄN PHÍ'
  },
  {
    id: 'tro-ly-skkn',
    title: 'TRỢ LÝ THẨM ĐỊNH SKKN',
    description: 'Ứng dụng AI hỗ trợ kiểm tra đạo văn, kiểm tra mức độ AI, sửa tự động',
    image: '/1trolyskknpro.jpg',
    url: 'https://ktskknpro.vercel.app/',
    category: 'TẠO SKKN',
    badge: 'LIÊN HỆ ĐỂ SỬ DỤNG'
  },
  {
    id: 'SKKN2026PRO',
    title: 'SKKN 2026 PRO - VIẾT SKKN CHUẨN MẪU CÁC SỞ',
    description: 'Ứng dụng AI viết mọi SKKN mọi mẫu các Sở/Phòng dành cho GV',
    image: '/skkn2026pro.jpg',
    url: 'https://skkn2026pro.vercel.app/',
    category: 'TẠO SKKN',
    badge: 'LIÊN HỆ ĐỂ SỬ DỤNG'
  },
  {
    id: 'SKKN2026',
    title: 'SKKN 2026- VIẾT SKKN MẪU SỞ HẢI PHÒNG',
    description: 'Ứng dụng AI viết SKKN mẫu sở Hải Phòng và một số sở khác dành cho GV',
    image: '/skkn2026.PNG',
    url: 'https://vietskkn2026.vercel.app/',
    category: 'TẠO SKKN',
    badge: 'LIÊN HỆ ĐỂ SỬ DỤNG'
  },
  {
    id: 'CHATBOT PRO',
    title: 'CHATBOT CÁ NHÂN HÓA PRO',
    description: 'Ứng dụng AI tập trung cá nhân hóa chuyên môn đặc biệt dành cho GV',
    image: '/chatbotgv.png',
    url: 'https://chatbotgv.vercel.app/',
    category: 'BỘ TRỢ LÝ AI',
    badge: 'LIÊN HỆ ĐỂ SỬ DỤNG'
  },
  {
    id: 'skkn-edit',
    title: 'SKKN EDITOR PRO',
    description: 'Ứng dụng AI hỗ trợ CHỈNH SỬA, RÚT GỌN SKKN CHUYÊN NGHIỆP',
    image: '/skknedit.png',
    url: 'https://skkneditorpro.vercel.app/',
    category: 'TẠO SKKN',
    badge: 'LIÊN HỆ ĐỂ SỬ DỤNG'
  },
  {
    id: 'viet-skkn',
    title: 'SKKN 2025 - VIẾT SKKN TỰ ĐỘNG',
    description: 'Công cụ hỗ trợ giáo viên hoàn thành Sáng kiến kinh nghiệm nhanh chóng, chuẩn mẫu Bộ GD&ĐT. Gợi ý đề tài thông minh, văn phong sư phạm, tiết kiệm 90% thời gian.',
    image: '/appvietskkn.jpg',
    url: '#viet-skkn',
    category: 'TẠO SKKN',
    badge: 'LIÊN HỆ ĐỂ SỬ DỤNG'
  },
  {
    id: 'tro-ly',
    title: 'TRỢ LÝ TẠO PHIẾU HỌC TẬP',
    description: 'Ứng dụng AI hỗ trợ TẠO PHIẾU HỌC TẬP toàn môn toàn cấp',
    image: '/phieuhoctap.png',
    url: 'https://trolytaophieuhoctap.vercel.app/',
    category: 'TẠO SẢN PHẨM GIÁO DỤC',
    badge: 'MIỄN PHÍ'
  },
  {
    id: 'giao-an',
    title: 'GIÁO ÁN NĂNG LỰC SỐ',
    description: 'Ứng dụng AI hỗ trợ soạn bài giảng hiệu quả, giúp giáo viên tiết kiệm thời gian và nâng cao chất lượng dạy học theo chuẩn mới.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIE44YLmhCRlZ3Pw7oTgkNrrvG2N7wte06c-7AJmQQYVooZ1qgYN12zdWNPybDN3kr-mYvbqXmt5kHPjyE93rYbf0tGJzU5WL8GhAjjMiFIo8qboNMzZiZdoLf1ynES93GEZC5x1wT8eGCr8vWXTPbLBsqOcUZMir1MvMpeAk2Ga2MPmQfE7j_fbx3bgL7DkQ_FYD9hp4u5Ke9zJHLBvC3xSgVO2hbeDpalY4fL-eC6I-txIYiCUHOCPuAlOCixQhRlGd9Ew_sOk_h',
    url: 'https://khbdnlstht.vercel.app/',
    category: 'TẠO GIÁO ÁN',
    badge: 'MIỄN PHÍ'
  },
  {
    id: 'tro-ly-slide',
    title: 'TRỢ LÝ TẠO SLIDE THÔNG MINH',
    description: 'Ứng dụng AI hỗ trợ tạo slide chuyên nghiệp và sinh động',
    image: '/trolytaoslide.jpg',
    url: 'https://trolytaoslide.vercel.app/',
    category: 'BỘ TRỢ LÝ AI',
    badge: 'MIỄN PHÍ'
  },
  {
    id: 'tro-ly-quiz',
    title: 'TRỢ LÝ TẠO CÂU HỎI TRẮC NGHIỆM',
    description: 'Ứng dụng AI hỗ trợ tạo câu hỏi trực quan và sinh động',
    image: '/trolyquiz.png',
    url: 'https://trolyquiz.vercel.app/',
    category: 'TẠO ĐỀ THI',
    badge: 'MIỄN PHÍ'
  },
  {
    id: 'tro-ly-tao-mo-phong',
    title: 'TRỢ LÝ TẠO MÔ PHỎNG TRỰC QUAN',
    description: 'Ứng dụng AI hỗ trợ tạo mô phỏng trực quan và sinh động',
    image: '/trolymophong.png',
    url: 'https://trolytaomophong.vercel.app/',
    category: 'TẠO ĐỀ THI',
    badge: 'MIỄN PHÍ'
  },
  {
    id: 'tro-ly-tao-de-thi-tu-ma-tran',
    title: 'TRỢ LÝ TẠO ĐỀ THI TỪ MA TRẬN',
    description: 'Ứng dụng AI hỗ trợ tạo đề thi theo ma trận đặc tả dành cho GV Chuẩn GDPT 2018',
    image: '/trolytaodethi.jpg',
    url: 'https://trolytaodethi2026.vercel.app/',
    category: 'TẠO ĐỀ THI',
    badge: 'MIỄN PHÍ'
  },
  {
    id: 'tro-ly-tao-bai-tap',
    title: 'TRỢ LÝ TẠO BÀI TẬP TOÀN CẤP',
    description: 'Ứng dụng AI hỗ trợ tạo bài tập, đề thi dành cho GV các cấp học - Chuẩn GDPT 2018',
    image: '/trolytaobaitap.png',
    url: 'https://trolytaobaitap.vercel.app/',
    category: 'TẠO ĐỀ THI',
    badge: 'MIỄN PHÍ'
  },
  {
    id: 'tro-ly-van-hoc',
    title: 'TRỢ LÝ VĂN HỌC',
    description: 'Ứng dụng AI hỗ trợ toàn diện GV cấp Tiểu học, THCS & THPT - Chuẩn ma trận GDPT 2018.',
    image: '/trolyvanhoc.jpg',
    url: 'https://trolymonvan.vercel.app/',
    category: 'TẠO ĐỀ THI',
    badge: 'MIỄN PHÍ'
  },
  {
    id: 'xuong-truyen-pro',
    title: 'XƯỞNG TRUYỆN PRO',
    description: 'Công cụ AI mạnh mẽ giúp tạo kịch bản truyện tranh, kể chuyện kỹ thuật số và minh họa bài giảng sống động chỉ trong vài phút.',
    image: '/xuongtruyenpro.jpg',
    url: 'https://xuongtruyenpro.vercel.app/',
    category: 'TẠO SẢN PHẨM GIÁO DỤC',
    badge: 'MIỄN PHÍ'
  },
  {
    id: 'sinh-de',
    title: 'SINH ĐỀ BIẾN THỂ',
    description: 'Trợ lý AI đắc lực giúp giáo viên tạo đề thi thông minh, đa dạng biến thể và ma trận đề chỉ trong vài phút.',
    image: '/sinhdebienthe.jpg',
    url: 'https://examgenprotht.vercel.app/',
    category: 'TẠO ĐỀ THI',
    badge: 'MIỄN PHÍ'
  },
  {
    id: 'tao-de',
    title: 'TẠO ĐỀ TƯƠNG TỰ',
    description: 'Tự động hóa quy trình soạn đề của bạn. Tạo các câu hỏi đề thi tương tự ngay lập tức dựa trên tài liệu hiện có.',
    image: '/taodetuongtu.jpg',
    url: 'https://taodethituongtu.vercel.app/',
    category: 'TẠO ĐỀ THI',
    badge: 'MIỄN PHÍ'
  },
  {
    id: 'tro-ly-anh',
    title: 'TRỢ LÝ TIẾNG ANH AI',
    description: 'Empowering Teachers with Artificial Intelligence. Công cụ chuyên dụng dành cho giáo viên hiện đại.',
    image: '/trolytienganhai.jpg',
    url: 'https://trolytienganh.vercel.app/',
    category: 'BỘ TRỢ LÝ AI',
    badge: 'MIỄN PHÍ'
  },
  {
    id: 'gia-su-toan',
    title: 'GIA SƯ TOÁN PRO',
    description: 'Your AI Teaching Assistant. Empowering teachers with advanced AI solutions for mathematics.',
    image: '/giasutoanpro.jpg',
    url: 'https://giasutoanhocpro.vercel.app/',
    category: 'BỘ TRỢ LÝ AI',
    badge: 'MIỄN PHÍ'
  },
  {
    id: 'tro-ly-ao-toan',
    title: 'TRỢ LÝ ẢO TOÁN THẦY THANH',
    description: 'Trợ lý AI chuyên biệt cho môn Toán, hỗ trợ giáo viên trong việc giảng dạy, giải bài tập và tạo tài liệu học tập hiệu quả.',
    image: '/z7354426534960_8c2a00859fd8a27ba80ef3b1ec55062b.jpg',
    url: 'https://trolyaothaythanh.vercel.app/',
    category: 'BỘ TRỢ LÝ AI',
    badge: 'MIỄN PHÍ'
  },
  {
    id: 'tro-ly-anh-pro',
    title: 'TRỢ LÝ ẢO TIẾNG ANH PRO',
    description: 'Giải pháp AI toàn diện giúp giáo viên soạn bài, chấm điểm và sáng tạo nội dung giảng dạy chỉ trong vài giây.',
    image: '/trolyaotienganhpro.jpg',
    url: 'https://english-assistant-pro.vercel.app/',
    category: 'BỘ TRỢ LÝ AI',
    badge: 'MIỄN PHÍ'
  },
  {
    id: 'tro-ly-',
    title: 'TRỢ LÝ ẢO CHO ',
    description: 'Ứng dụng AI hỗ trợ GVCN nhận xét học sinh cả lớp một cách tự động và chuyên nghiệp.',
    image: '/trolyaogvcn.jpg',
    url: 'https://trolygvcn.vercel.app/',
    category: 'BỘ TRỢ LÝ AI',
    badge: 'SUPER VIP'
  },
  {
    id: 'chinh-van-ban',
    title: 'CHUẨN HÓA VĂN BẢN TỪ AI',
    description: 'Ứng dụng AI hỗ trợ GV Tự động phát hiện và sửa các lỗi chính tả, dấu câu, và chuẩn hóa định dạng văn bản chuyên nghiệp.',
    image: '/chuanhoavanban.jpg',
    url: 'https://chinhvanbanai.vercel.app/',
    category: 'BỘ TRỢ LÝ AI',
    badge: 'MIỄN PHÍ'
  },
  {
    id: 'tona-hoc-ca-nhan',
    title: 'MY MATH PRO',
    description: 'Mở khóa tiềm năng toán học với lộ trình AI và Thần số học dành riêng cho bạn!',
    image: '/mymathpro.jpg',
    url: 'https://mymathpro.vercel.app/',
    category: 'BỘ TRỢ LÝ AI',
    badge: 'SUPER VIP'
  }
];

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');
  const [showSKKNModal, setShowSKKNModal] = useState(false);
  const [showZaloModal, setShowZaloModal] = useState(false);
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [visitCount, setVisitCount] = useState<number>(19866);

  useEffect(() => {
    const APP_NAMESPACE = 'giaovienai-web';
    const BASE_VISIT_OFFSET = 19866;
    const FALLBACK_KEY = `${APP_NAMESPACE}_total_fallback`;

    const fetchServerVisitCount = async (): Promise<number> => {
      // Thử API chính với timeout 5s
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);
        const response = await fetch(
          `https://api.counterapi.dev/v1/${APP_NAMESPACE}/visits/up`,
          { signal: controller.signal }
        );
        clearTimeout(timeoutId);
        const data = await response.json();
        if (data && data.count) {
          const total = BASE_VISIT_OFFSET + data.count;
          try { localStorage.setItem(FALLBACK_KEY, String(total)); } catch { }
          return total;
        }
      } catch {
        // API down → dùng fallback localStorage
      }

      // Fallback: localStorage — mỗi lần load web +1
      try {
        const cached = parseInt(localStorage.getItem(FALLBACK_KEY) || String(BASE_VISIT_OFFSET), 10);
        const newCount = cached + 1;
        localStorage.setItem(FALLBACK_KEY, String(newCount));
        return newCount;
      } catch {
        return BASE_VISIT_OFFSET;
      }
    };

    // Delay 500ms tránh double-count trong React strict mode (theo SKILL)
    const timer = setTimeout(async () => {
      const total = await fetchServerVisitCount();
      setVisitCount(total);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const categories = ['Tất cả', ...Array.from(new Set(apps.map(app => app.category)))];

  const filteredApps = selectedCategory === 'Tất cả'
    ? apps
    : apps.filter(app => app.category === selectedCategory);

  const handleAppClick = (app: AppCard, e: React.MouseEvent) => {
    if (app.id === 'viet-skkn') {
      e.preventDefault();
      setShowSKKNModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg">
                <School className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-bold text-gray-900">TRỢ LÝ AI DÀNH CHO GIÁO VIÊN</h1>
                <p className="text-[10px] sm:text-xs text-gray-600 max-w-xs sm:max-w-md">Bộ công cụ AI cho Giáo viên phát triển bởi thầy Trần Hoài Thanh</p>
              </div>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div className="hidden lg:flex items-center gap-6">
              <a href="#apps" className="text-gray-700 hover:text-teal-600 transition-colors">Ứng dụng</a>
              <a href="#about" className="text-gray-700 hover:text-teal-600 transition-colors">Giới thiệu</a>
              <a href="#contact" className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium">
                Liên hệ
              </a>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 space-y-3">
              <a href="#apps" className="block text-gray-700 hover:text-teal-600 transition-colors">Ứng dụng</a>
              <a href="#about" className="block text-gray-700 hover:text-teal-600 transition-colors">Giới thiệu</a>
              <a href="#contact" className="block px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium text-center">
                Liên hệ
              </a>
            </div>
          )}
        </nav>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">AI-Powered Education Tools</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
              XÂY DỰNG CỘNG ĐỒNG<br />
              <span className="text-teal-200">GIÁO VIÊN ỨNG DỤNG AI</span><br />
              VÀO GIẢNG DẠY
            </h1>

            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              Bộ công cụ AI toàn diện giúp giáo viên tiết kiệm thời gian, nâng cao chất lượng giảng dạy
              và tập trung vào những gì quan trọng nhất - học sinh.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#apps"
                className="px-8 py-4 bg-white text-teal-600 rounded-xl font-bold hover:bg-gray-50 transition-all shadow-lg hover:scale-105"
              >
                Khám phá công cụ
              </a>

              <button
                onClick={() => setShowZaloModal(true)}
                className="px-8 py-4 bg-blue-600/90 backdrop-blur-sm text-white rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg hover:scale-105 flex items-center gap-2"
              >
                <Users className="w-5 h-5" />
                Group Zalo
              </button>
              <button
                onClick={() => setShowGuideModal(true)}
                className="px-8 py-4 bg-amber-500/90 backdrop-blur-sm text-white rounded-xl font-bold hover:bg-amber-600 transition-all shadow-lg hover:scale-105 flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                Hướng dẫn sử dụng
              </button>
            </div>



            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">1200+</div>
                <div className="text-teal-100">Giáo viên tin dùng</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">30+</div>
                <div className="text-teal-100">Công cụ AI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">90%</div>
                <div className="text-teal-100">Tiết kiệm thời gian</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">{visitCount.toLocaleString()}+</div>
                <div className="text-teal-100">Lượt truy cập</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="apps" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              KHO CÔNG CỤ AI
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Các công cụ hỗ trợ giảng dạy hiệu quả nhất, được hàng nghìn giáo viên tin dùng
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category
                  ? 'bg-teal-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredApps.map((app) => (
              <div
                key={app.id}
                className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {app.badge && (
                    <div className="absolute top-4 right-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {app.badge}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                      <a
                        href={app.url}
                        target={app.id === 'viet-skkn' ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        onClick={(e) => handleAppClick(app, e)}
                        className="inline-flex items-center gap-2 bg-white text-teal-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                      >
                        {app.id === 'viet-skkn' ? 'Xem chi tiết' : 'Truy cập ngay'}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                      {app.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {app.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {app.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Về tác giả
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Tôi là <strong>Trần Hoài Thanh</strong>, giáo viên Toán tại THPT với niềm đam mê
                  ứng dụng công nghệ AI vào giảng dạy.
                </p>
                <p>
                  Với sứ mệnh <strong>"Xây dựng cộng đồng giáo viên ứng dụng AI vào giảng dạy"</strong>,
                  tôi đã phát triển các công cụ giúp giáo viên tiết kiệm thời gian soạn giáo án, tạo đề thi,
                  và nâng cao chất lượng dạy học.
                </p>
                <p>
                  Tất cả các công cụ được thiết kế dựa trên nhu cầu thực tế của giáo viên Việt Nam,
                  tuân thủ chuẩn Bộ GD&ĐT và dễ sử dụng ngay cả với người không rành công nghệ.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.facebook.com/tranhoaithanhvicko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors"
                >
                  Facebook
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="tel:0348296773"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors"
                >
                  Zalo: 0348296773
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/gemini_generated_image_os5rg2os5rg2os5r.png"
                  alt="Trần Hoài Thanh"
                  className="w-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Sẵn sàng nâng tầm giảng dạy?
              </h2>
              <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
                Tham gia cùng hơn 1,200 giáo viên đang sử dụng các công cụ AI để cải thiện chất lượng giảng dạy
              </p>
              <a
                href="#apps"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-600 rounded-xl font-bold hover:bg-gray-50 transition-all shadow-lg hover:scale-105"
              >
                Khám phá ngay
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center">
                  <School className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">Trần Hoài Thanh</h3>
                  <p className="text-sm text-gray-400">AI for Education</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Xây dựng cộng đồng giáo viên ứng dụng AI vào giảng dạy
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Liên kết</h4>
              <div className="space-y-2 text-sm">
                <a href="#apps" className="block text-gray-400 hover:text-white transition-colors">Ứng dụng</a>
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors">Giới thiệu</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Liên hệ</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Liên hệ</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Zalo: 0348296773</p>
                <a
                  href="https://www.facebook.com/tranhoaithanhvicko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors"
                >
                  Facebook: tranhoaithanhvicko
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© 2024 Trần Hoài Thanh. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Course Modal removed */}
      {false && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl my-8 bg-gradient-to-b from-teal-50 to-white rounded-2xl shadow-2xl">
            <button
              onClick={() => setShowCourseModal(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white hover:bg-gray-100 transition-colors shadow-md"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 md:p-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full text-sm font-bold text-teal-600 mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span className="tracking-wide">Đào Tạo Chuyên Sâu</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                  <span className="text-gray-900 tracking-tight">Khóa Học Thực Chiến</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 tracking-tight">Viết SKKN & Tạo App Dạy Học</span>
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Khóa học giúp thầy cô thành thạo công nghệ AI, tạo ứng dụng giáo dục và hoàn thành SKKN chất lượng cao
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-teal-100 hover:border-teal-300 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">Hoàn thành SKKN chất lượng chỉ với 1 câu lệnh</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Không còn phải đau đầu sắp xếp ý tưởng, công bạn sẽ giúp ban tập trung vào việc "cải thiện kiến thức và điểm số" cho học sinh.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-teal-100 hover:border-teal-300 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center flex-shrink-0">
                      <ExternalLink className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">Tạo truyện tranh (Comics), video giáo dục minh họa bài giảng chỉ bằng 1 câu lệnh</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Biến các khái niệm phức tạp trở nên trực quan và rõ ràng. Tạo ra môi trường học tập năng động và thu vị, giúp học sinh "Hứng thú học tập".
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-teal-100 hover:border-teal-300 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center flex-shrink-0">
                      <School className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">Chủ động Tạo ra Ứng dụng vô hạn</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Bạn sẽ học cách sử dụng AI để dộng gọi kiến thực chuyên môn của mình thành các ứng dụng tương tác độc quyền, tùy chỉnh hoàn toàn cho học sinh của bạn.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-teal-100 hover:border-teal-300 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">Định vị là CHUYÊN GIA 4.0</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Việc sở hữu công nghệ tạo ứng dụng này ngay lập tức đưa bạn lên vị trí cao mới trong nghề của bạn và mở ra nhiều cơ hội làm việc cùng phụ huynh nghị thêm cho bản thân.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="https://forms.gle/293TKbdAaBhqDHhHA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 text-white rounded-2xl font-bold text-lg hover:from-teal-600 hover:via-cyan-600 hover:to-teal-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 tracking-wide"
                >
                  Tham gia ngay cùng cộng đồng giáo viên toàn năng
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {showSKKNModal && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-2xl my-8 bg-white rounded-2xl shadow-2xl">
            <button
              onClick={() => setShowSKKNModal(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 md:p-8">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-teal-50 px-3 py-1 rounded-full text-xs font-semibold text-teal-600 mb-4">
                  <Sparkles className="w-3 h-3" />
                  <span>Công nghệ AI mới nhất</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Viết SKKN Siêu Tốc <span className="text-teal-600">với Trợ Lý AI</span>
                </h2>
                <p className="text-gray-600">
                  Công cụ hỗ trợ giáo viên hoàn thành Sáng kiến kinh nghiệm nhanh chóng, chuẩn mẫu Bộ GD&ĐT chỉ trong vài bước đơn giản.
                </p>
              </div>

              <div className="bg-gradient-to-b from-teal-50 to-white rounded-xl p-6 mb-6 border border-teal-100">
                <img
                  src="/image.png"
                  alt="SKKN Pro Interface"
                  className="w-full rounded-lg shadow-lg border border-gray-200"
                />
              </div>

              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-bold text-gray-900">Tính năng nổi bật</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-teal-50 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600 mb-3">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-sm mb-1">Gợi ý đề tài thông minh</h4>
                    <p className="text-xs text-gray-600">Phân tích và đề xuất đề tài SKKN phù hợp</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 mb-3">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-sm mb-1">Chuẩn mẫu Bộ GD</h4>
                    <p className="text-xs text-gray-600">Tự động định dạng theo quy chuẩn mới nhất</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 mb-3">
                      <School className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-sm mb-1">Văn phong sư phạm</h4>
                    <p className="text-xs text-gray-600">AI tinh chỉnh câu từ mượt mà</p>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex-shrink-0"></div>
                  <div>
                    <p className="font-bold text-sm mb-1">Cô Nguyễn Thu Hà</p>
                    <p className="text-xs text-gray-600 mb-2">Giáo viên Tiếng Anh, Hà Nội</p>
                    <p className="text-sm italic text-gray-700">
                      "Phần mềm thực sự giúp tôi tiết kiệm 70% thời gian viết SKKN năm nay. Giao diện rất dễ dùng!"
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-600 mb-2">Liên hệ đăng ký:</p>
                  <a href="tel:0348296773" className="text-teal-600 text-lg font-bold hover:underline">
                    Zalo: 0348296773
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://www.facebook.com/tranhoaithanhvicko"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors"
                  >
                    Liên hệ Facebook
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setShowSKKNModal(false)}
                    className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showZaloModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setShowZaloModal(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                CỘNG ĐỒNG GIÁO VIÊN<br />
                <span className="text-blue-600">ỨNG DỤNG AI - GROUP 3</span>
              </h3>

              <a
                href="https://zalo.me/g/urhxrf976"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline mb-4 block"
              >
                https://zalo.me/g/urhxrf976
              </a>

              <div className="bg-blue-50 rounded-xl p-4 mb-6 text-left">
                <p className="text-gray-700 leading-relaxed text-center mb-4">
                  Cập nhật các thông tin và app mới nhất phục vụ việc dạy và học dành cho GV, trao đổi ứng dụng AI dành cho GV.
                </p>
                <div className="flex justify-center">
                  <div className="p-2 bg-white rounded-xl shadow-sm">
                    <img
                      src="/zalo-qr.png"
                      alt="QR Code Zalo Group"
                      className="w-48 h-48 object-contain"
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Quét mã QR để tham gia nhóm
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="https://zalo.me/g/urhxrf976"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
                >
                  <Users className="w-5 h-5" />
                  Tham gia nhóm Zalo ngay
                </a>
                <button
                  onClick={() => setShowZaloModal(false)}
                  className="w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showGuideModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setShowGuideModal(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-left max-h-[80vh] overflow-y-auto">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  HƯỚNG DẪN SỬ DỤNG<br />
                  <span className="text-amber-600">VÀ MỘT SỐ APP KHÁC</span>
                </h3>
              </div>

              {/* Phần 1: Video hướng dẫn */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600 text-sm font-bold">1</span>
                  Video hướng dẫn sử dụng
                </h4>
                <div className="bg-red-50 rounded-xl p-4 space-y-3">
                  <a
                    href="https://youtu.be/oNYIzQA0h7Y"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow-sm hover:shadow group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">HỖ TRỢ LẤY API KEY</p>
                      <p className="text-xs text-gray-500">Hướng dẫn lấy API Key để sử dụng các app AI</p>
                    </div>
                  </a>

                  <a
                    href="https://youtu.be/BQgneNmJxSM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow-sm hover:shadow group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">HƯỚNG DẪN SD APP SKKN</p>
                      <p className="text-xs text-gray-500">Video hướng dẫn sử dụng App viết SKKN</p>
                    </div>
                  </a>

                  <a
                    href="https://youtu.be/gO4y-aGvQRA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow-sm hover:shadow group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">HƯỚNG DẪN SỬ DỤNG CÁC APP TRONG WEB</p>
                      <p className="text-xs text-gray-500">Hướng dẫn chi tiết các công cụ trên GiaoVienAI</p>
                    </div>
                  </a>

                  <a
                    href="https://youtu.be/F7jXwBXn6oY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow-sm hover:shadow group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">HƯỚNG DẪN SỬ DỤNG PHẦN MỀM EXAMGEN PRO</p>
                      <p className="text-xs text-gray-500">Video hướng dẫn sử dụng phần mềm tạo đề thi</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Phần 2: App chia sẻ mã nguồn */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-sm font-bold">2</span>
                  App chia sẻ mã nguồn và code
                </h4>
                <div className="bg-purple-50 rounded-xl p-4 space-y-3">
                  <a
                    href="https://ai.studio/apps/drive/1gTFTdqmlzPzOkM8nGebWuRYOaBItS0pE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow-sm hover:shadow group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">APP PHỤC CHẾ ẢNH CŨ</p>
                      <p className="text-xs text-gray-500">Ứng dụng AI phục hồi ảnh cũ, ảnh mờ - Mã nguồn mở</p>
                    </div>
                  </a>
                </div>
              </div>

              <button
                onClick={() => setShowGuideModal(false)}
                className="w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bảng giá Modal removed */}
      {false && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 backdrop-blur-sm p-4 pt-8 overflow-y-auto">
          <div className="relative w-full max-w-3xl mb-8 bg-white rounded-3xl shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in duration-300 border-4 border-teal-100">
            <button
              onClick={() => setShowPromoModal(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>

            <div className="text-center mb-6">
              <div className="inline-block p-4 rounded-full bg-teal-100 mb-4">
                <Star className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                💎 BẢNG GIÁ CÁC ỨNG DỤNG AI 💎
              </h3>
            </div>

            <div className="space-y-6 text-gray-700">
              {/* Bảng giá */}
              <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                <table className="w-full text-sm md:text-base">
                  <thead>
                    <tr className="bg-gradient-to-r from-teal-600 to-teal-700 text-white">
                      <th className="px-3 py-3 text-center font-bold w-12">STT</th>
                      <th className="px-3 py-3 text-left font-bold">Tên app</th>
                      <th className="px-3 py-3 text-right font-bold w-28">Phí sử dụng</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-teal-50/50 transition-colors">
                      <td className="px-3 py-2.5 text-center font-medium">1</td>
                      <td className="px-3 py-2.5">Tạo đề thi vào 10, tốt nghiệp THPT, CV 7991, tạo đề tương tự, sinh đề biến thể</td>
                      <td className="px-3 py-2.5 text-right font-semibold text-gray-800">199.000đ</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50/50 hover:bg-teal-50/50 transition-colors">
                      <td className="px-3 py-2.5 text-center font-medium">2</td>
                      <td className="px-3 py-2.5">Viết biện pháp GVG-GVCNG</td>
                      <td className="px-3 py-2.5 text-right font-semibold text-gray-800">199.000đ</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-teal-50/50 transition-colors">
                      <td className="px-3 py-2.5 text-center font-medium">3</td>
                      <td className="px-3 py-2.5">Xưởng sản xuất video giáo dục</td>
                      <td className="px-3 py-2.5 text-right font-semibold text-gray-800">199.000đ</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50/50 hover:bg-teal-50/50 transition-colors">
                      <td className="px-3 py-2.5 text-center font-medium">4</td>
                      <td className="px-3 py-2.5">Tạo giáo án 5512, NCBH, STEM</td>
                      <td className="px-3 py-2.5 text-right font-semibold text-gray-800">199.000đ</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-teal-50/50 transition-colors">
                      <td className="px-3 py-2.5 text-center font-medium">5</td>
                      <td className="px-3 py-2.5">Bộ 15 game tương tác</td>
                      <td className="px-3 py-2.5 text-right font-semibold text-gray-800">199.000đ</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50/50 hover:bg-teal-50/50 transition-colors">
                      <td className="px-3 py-2.5 text-center font-medium">6</td>
                      <td className="px-3 py-2.5">Kế hoạch bài giảng Pro thi GVG, dự giờ chuyên môn</td>
                      <td className="px-3 py-2.5 text-right font-semibold text-gray-800">199.000đ</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-teal-50/50 transition-colors">
                      <td className="px-3 py-2.5 text-center font-medium">7</td>
                      <td className="px-3 py-2.5">Trợ lý kiểm tra đạo văn và kiểm tra AI, thẩm định sáng kiến kinh nghiệm</td>
                      <td className="px-3 py-2.5 text-right font-semibold text-gray-800">199.000đ</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50/50 hover:bg-teal-50/50 transition-colors">
                      <td className="px-3 py-2.5 text-center font-medium">8</td>
                      <td className="px-3 py-2.5">Sáng kiến kinh nghiệm 2025 & 2026 Pro</td>
                      <td className="px-3 py-2.5 text-right font-semibold text-gray-800">199.000đ</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-teal-50/50 transition-colors">
                      <td className="px-3 py-2.5 text-center font-medium">9</td>
                      <td className="px-3 py-2.5">Chatbot cá nhân hóa</td>
                      <td className="px-3 py-2.5 text-right font-semibold text-gray-800">199.000đ</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50/50 hover:bg-teal-50/50 transition-colors">
                      <td className="px-3 py-2.5 text-center font-medium">10</td>
                      <td className="px-3 py-2.5">Khóa học tạo app giáo dục: Một phát ăn ngay</td>
                      <td className="px-3 py-2.5 text-right font-semibold text-gray-800">499.000đ</td>
                    </tr>
                    <tr className="bg-teal-50 border-b-2 border-teal-200">
                      <td className="px-3 py-3 text-center font-bold text-teal-700" colSpan={2}>Tổng</td>
                      <td className="px-3 py-3 text-right font-extrabold text-teal-700 text-lg">2.290.000đ</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Ưu đãi VIP */}
              <div className="bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 p-5 rounded-2xl border-2 border-amber-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-200/30 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-lg md:text-xl font-extrabold text-amber-800 mb-2 flex items-center gap-2">
                        <Crown className="w-6 h-6 text-amber-600" />
                        ƯU ĐÃI GÓI VIP KIM CƯƠNG
                      </h4>
                      <p className="text-amber-700 font-medium mb-1">SỬ DỤNG FULL CÁC APP HIỆN TẠI VÀ SAU NÀY (viết chuyên đề, thần số học toàn diện, ngoại khóa...) ĐỀU MIỄN PHÍ</p>
                      <p className="text-sm text-amber-600">Quét mã QR thanh toán và chụp bill gửi về</p>
                      <p className="text-sm text-amber-600 font-semibold">Số Zalo: 0348296773</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-black text-red-600 bg-white px-6 py-3 rounded-2xl shadow-md border border-red-100">
                        599.000Đ
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* QR Code thanh toán */}
              <div className="text-center">
                <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
                  📱 Quét mã QR để thanh toán
                </h4>
                <div className="inline-block bg-pink-50 p-4 rounded-2xl shadow-md border border-pink-100">
                  <p className="font-bold text-gray-800 mb-1">TRẦN HOÀI THANH</p>
                  <p className="text-sm text-gray-500 mb-3">*******773</p>
                  <img
                    src="/qr-thanhtoan.png"
                    alt="QR thanh toán MoMo - Trần Hoài Thanh"
                    className="w-64 h-auto mx-auto rounded-xl"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <a
                  href="https://zalo.me/0348296773"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xs">ALO</span>
                  </div>
                  Liên hệ Zalo: 0348296773
                </a>
                <button
                  onClick={() => setShowPromoModal(false)}
                  className="w-full px-6 py-3 bg-gray-100 text-gray-600 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* VIP Modal removed */}
      {false && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-5xl my-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
            </div>

            <button
              onClick={() => setShowVIPModal(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="relative p-8 md:p-12">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 px-6 py-3 rounded-full text-lg font-bold text-red-400 mb-6 border border-red-500/30">
                  <Crown className="w-6 h-6 text-yellow-400" />
                  <span className="tracking-wide">ĐĂNG KÝ VIP</span>
                  <Crown className="w-6 h-6 text-yellow-400" />
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white">
                  Trở thành <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">THÀNH VIÊN VIP</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
                  Mở khóa toàn bộ tính năng premium và nhận hỗ trợ đặc biệt từ cộng đồng
                </p>

                {/* Tôn chỉ miễn phí */}
                <div className="bg-gradient-to-r from-teal-500/20 via-green-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-teal-400/40 max-w-4xl mx-auto">
                  <p className="text-xl md:text-2xl text-white leading-relaxed font-medium text-center">
                    🌟 <span className="text-teal-300 font-bold">Web lập ra với tôn chỉ miễn phí hầu hết đến 90%</span> dành cho thầy cô và sau này cũng vậy,
                    <span className="text-green-400 font-bold">không thu phí các app đã miễn phí</span>.
                    Tuy nhiên có một số app cần thu phí để <span className="text-yellow-300 font-semibold">duy trì tài khoản AI tạo app</span> và <span className="text-pink-400 font-semibold">ủng hộ tác giả</span> ❤️
                  </p>
                </div>
              </div>

              {/* Pricing Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {/* Gói 1 - Silver */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-gradient-to-b from-gray-700/90 to-gray-800/90 p-6 rounded-2xl border border-gray-600 hover:border-gray-400 transition-all hover:scale-105 h-full backdrop-blur-sm flex flex-col">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center shadow-xl">
                        <Zap className="w-8 h-8 text-gray-900" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-200 mb-2">GÓI BẠC</h3>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-4xl font-extrabold text-white">399K</span>
                        <span className="text-gray-400">/trọn đời</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6 flex-grow">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-400" />
                        </div>
                        <span className="text-sm text-gray-300">Sử dụng miễn phí <strong className="text-white">APP VIÊT SKKN</strong> 2025;2026 PRO</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-400" />
                        </div>
                        <span className="text-sm text-gray-300">Cập nhật liên tục + Video hướng dẫn</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-400" />
                        </div>
                        <span className="text-sm text-gray-300">App SKKN <span className="line-through text-gray-500">200K</span> <strong className="text-green-400">FREE</strong></span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-400" />
                        </div>
                        <span className="text-sm text-gray-300">App VIẾT BIỆN PHÁP GVG-GVCN <span className="line-through text-gray-500">200K</span> <strong className="text-green-400">FREE</strong></span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-400" />
                        </div>
                        <span className="text-sm text-gray-300">App TRỢ LÝ CHO GVCN <span className="line-through text-gray-500">199K</span> <strong className="text-green-400">FREE</strong></span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-400" />
                        </div>
                        <span className="text-sm text-gray-300">Tặng KHÓA CƠ BẢN <strong className="text-white">TẠO APP VÀ VIẾT SKKN</strong></span>
                      </div>
                    </div>

                    <a
                      href="https://zalo.me/0348296773"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-xl font-bold hover:from-gray-400 hover:to-gray-500 transition-all shadow-lg"
                    >
                      Đăng ký ngay
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Gói 2 - Gold (Featured) */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
                  <div className="relative bg-gradient-to-b from-yellow-900/90 via-orange-900/90 to-red-900/90 p-6 rounded-2xl border-2 border-yellow-500/50 hover:border-yellow-400 transition-all hover:scale-105 h-full backdrop-blur-sm flex flex-col">
                    {/* Popular badge */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 text-xs font-bold px-4 py-1 rounded-full shadow-lg flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        PHỔ BIẾN NHẤT
                      </div>
                    </div>

                    <div className="text-center mb-6 mt-2">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-xl">
                        <Crown className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-yellow-300 mb-2">GÓI VÀNG</h3>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-4xl font-extrabold text-white">499K</span>
                        <span className="text-yellow-300/60">/trọn đời</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6 flex-grow">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-yellow-400" />
                        </div>
                        <span className="text-sm text-yellow-100"><strong className="text-yellow-300">Bao gồm toàn bộ GÓI BẠC</strong></span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-yellow-400" />
                        </div>
                        <span className="text-sm text-yellow-100">Nhận <strong className="text-yellow-300">BỘ TOOL TẠO VÀ SỬA APP</strong> "MỘT PHÁT ĂN NGAY"</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-yellow-400" />
                        </div>
                        <span className="text-sm text-yellow-100">Chỉnh sửa và tạo app <strong className="text-yellow-300">thần tốc, chất lượng</strong></span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-yellow-400" />
                        </div>
                        <span className="text-sm text-yellow-100">Sở hữu <strong className="text-yellow-300">APP TẠO SIÊU PROMT TẤT CÁC CÁC MÔN CÁC CẤP</strong></span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-yellow-400" />
                        </div>
                        <span className="text-sm text-yellow-100">Hướng dẫn tạo app <strong className="text-yellow-300">1-1 qua zoom, ultraview</strong></span>
                      </div>
                    </div>

                    <a
                      href="https://zalo.me/0348296773"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all shadow-xl shadow-yellow-500/30"
                    >
                      Đăng ký ngay
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Gói 3 - Diamond */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative bg-gradient-to-b from-purple-900/90 via-pink-900/90 to-indigo-900/90 p-6 rounded-2xl border border-purple-500/50 hover:border-purple-400 transition-all hover:scale-105 h-full backdrop-blur-sm flex flex-col">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 via-pink-500 to-cyan-400 flex items-center justify-center shadow-xl">
                        <Gift className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-2">GÓI KIM CƯƠNG</h3>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-4xl font-extrabold text-white">599K</span>
                        <span className="text-purple-300/60">/trọn đời</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6 flex-grow">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-purple-400" />
                        </div>
                        <span className="text-sm text-purple-100"><strong className="text-purple-300">Bao gồm toàn bộ GÓI VÀNG</strong></span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-purple-400" />
                        </div>
                        <span className="text-sm text-purple-100">Nhận MÃ CODE <strong className="text-purple-300">HƠN 20 APP GIÁO DỤC</strong> (cập nhật liên tục)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-purple-400" />
                        </div>
                        <span className="text-sm text-purple-100"><strong className="text-purple-300">Tặng APP TẠO PROMT</strong> CHUYÊN NGHIỆP</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-purple-400" />
                        </div>
                        <span className="text-sm text-purple-100"><strong className="text-purple-300">Báo cáo sản phẩm</strong> chi tiết</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-purple-400" />
                        </div>
                        <span className="text-sm text-purple-100"><strong className="text-purple-300">Sửa app và thêm tính năng</strong> thành của riêng thầy cô</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-purple-400" />
                        </div>
                        <span className="text-sm text-purple-100"><strong className="text-purple-300">Tinh chỉnh theo ý muốn</strong> 1-1</span>
                      </div>
                    </div>

                    <a
                      href="https://zalo.me/0348296773"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white rounded-xl font-bold hover:from-purple-400 hover:via-pink-400 hover:to-purple-500 transition-all shadow-xl shadow-purple-500/30"
                    >
                      Đăng ký ngay
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="text-center">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/10">
                  <p className="text-xl text-white font-semibold mb-2">
                    📞 Thầy cô đăng ký gói vui lòng liên hệ số Zalo: <span className="text-yellow-400">0348296773</span>
                  </p>
                  <p className="text-gray-300">
                    💡 <span className="text-green-400 font-medium">Sau này nâng cấp gói</span> chỉ cần thêm số tiền chênh lệch giữa các gói
                  </p>
                </div>
                <a
                  href="https://zalo.me/0348296773"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl font-bold text-lg hover:from-blue-400 hover:to-blue-500 transition-all shadow-xl shadow-blue-500/30 hover:scale-105"
                >
                  <Users className="w-6 h-6" />
                  Liên hệ Zalo ngay
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Group Modal removed */}
      {false && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-3xl my-8 bg-gradient-to-b from-purple-900 via-pink-900 to-rose-900 rounded-3xl shadow-2xl overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl"></div>
            </div>

            <button
              onClick={() => setShowGroupModal(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="relative p-6 md:p-10">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-6 py-3 rounded-full text-lg font-bold text-yellow-400 mb-6 border border-yellow-500/30">
                  <Zap className="w-6 h-6" />
                  <span className="tracking-wide">THẦN TỐC - HIỆU QUẢ</span>
                  <Zap className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight text-white">
                  NHÓM TẠO APP THẦN TỐC<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500">ĐI TẮT ĐÓN ĐẦU !!!</span>
                </h2>
                <div className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-2xl p-4 border border-purple-400/30">
                  <p className="text-xl text-white font-bold mb-2">
                    🎯 BUỔI HỌC DUY NHẤT - HỖ TRỢ A-Z FULL TOOL + SKILL EDUCATION
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
                <p className="text-lg text-white leading-relaxed mb-6">
                  Từ một người mới, <span className="text-yellow-400 font-bold">không biết gì về lập trình</span>, có thể tự tin làm app dạy học, trò chơi, quản lý học sinh… <span className="text-green-400 font-bold">cực nhanh và dễ dàng</span>, không cần sửa nhiều, không cần mất thời gian tạo lệnh, tất cả đã được <span className="text-pink-400 font-bold">ĐÓNG GÓI theo quy trình chuẩn hóa</span> - nhanh - chính xác - hiệu quả tối đa!
                </p>

                {/* Học phí */}
                <div className="bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-xl p-4 mb-6 border border-red-400/30 text-center">
                  <p className="text-3xl md:text-4xl font-extrabold text-white">
                    💰 HỌC PHÍ: <span className="text-yellow-400">499K</span>
                  </p>
                </div>

                {/* Quà tặng */}
                <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl p-5 border border-green-400/30">
                  <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                    <Gift className="w-6 h-6" />
                    🎁 Quà tặng cực xịn:
                  </h3>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400">✓</span>
                      <span>Full app <strong className="text-yellow-400">VIẾT SKKN PRO</strong> mới nhất</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400">✓</span>
                      <span>Full app <strong className="text-yellow-400">SKKN CHECKER PRO</strong> mới nhất</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400">✓</span>
                      <span>App <strong className="text-yellow-400">TẠO LỆNH SINH APP</strong> mới nhất</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400">✓</span>
                      <span>Bộ <strong className="text-yellow-400">SKILL EDUCATION</strong> tạo và sửa app mạnh nhất</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl p-4 mb-6 border border-purple-400/30 text-center">
                <p className="text-lg text-white">
                  🌟 Giúp thầy cô tạo app <span className="text-yellow-400 font-bold">siêu nhanh</span>, tự tin tham gia các <span className="text-green-400 font-bold">cuộc thi sản phẩm AI</span> ngay từ hôm nay!
                </p>
              </div>

              {/* Feedback images */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 text-center flex items-center justify-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  Phản hồi từ học viên
                  <Star className="w-5 h-5 text-yellow-400" />
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden shadow-lg border-2 border-white/20 hover:border-yellow-400/50 transition-colors">
                    <img src="/feedback1.jpg" alt="Feedback học viên 1" className="w-full h-auto" />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg border-2 border-white/20 hover:border-yellow-400/50 transition-colors">
                    <img src="/feedback2.jpg" alt="Feedback học viên 2" className="w-full h-auto" />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg border-2 border-white/20 hover:border-yellow-400/50 transition-colors">
                    <img src="/feedback3.jpg" alt="Feedback học viên 3" className="w-full h-auto" />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg border-2 border-white/20 hover:border-yellow-400/50 transition-colors">
                    <img src="/feedback4.jpg" alt="Feedback học viên 4" className="w-full h-auto" />
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="flex flex-col gap-3">
                <a
                  href="https://zalo.me/0348296773"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl font-bold text-lg hover:from-green-400 hover:to-teal-400 transition-all shadow-xl shadow-green-500/30 hover:scale-105"
                >
                  <Users className="w-6 h-6" />
                  Liên hệ Zalo: 0348296773
                </a>
                <button
                  onClick={() => setShowGroupModal(false)}
                  className="w-full px-6 py-3 bg-white/10 text-white rounded-xl font-bold hover:bg-white/20 transition-colors"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
