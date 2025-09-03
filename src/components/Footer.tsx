import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Icon name="Factory" className="h-8 w-8 text-primary mr-3" />
              <h5 className="text-xl font-bold">СтальПро</h5>
            </div>
            <p className="text-gray-400">Надёжные решения промышленного газового оборудования для вашего бизнеса.</p>
          </div>
          <div>
            <h6 className="font-semibold mb-4">Продукция</h6>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/speed-valve" className="hover:text-white transition-colors">Скоростной клапан</a></li>
              <li><a href="/safety-valve" className="hover:text-white transition-colors">Предохранительный клапан</a></li>
              <li><a href="/components" className="hover:text-white transition-colors">Комплектующие</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-semibold mb-4">Контакты</h6>
            <ul className="space-y-2 text-gray-400">
              <li>Алтайский край, г. Барнаул, ул. Кавалерийская 14, бокс 171</li>
              <li>+7 960 937-35-42, +7 960 950-59-04</li>
              <li>sadoxa1996@mail.ru</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 СтальПро. Все права защищены.</p>
          <div className="mt-4">
            <a href="https://webmaster.yandex.ru/siteinfo/?site=https://стальпро.com">
              <img 
                width="88" 
                height="31" 
                alt="Яндекс.Вебмастер" 
                style={{borderRadius: "8px"}} 
                src="https://yandex.ru/cycounter?https://стальпро.com&theme=light&lang=ru"
                className="mx-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}