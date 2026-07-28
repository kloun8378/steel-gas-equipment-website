import Icon from "@/components/ui/icon";

const ServiceUnavailable = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="text-center max-w-md">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <Icon name="ServerCrash" size={40} className="text-primary" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-card-foreground mb-3">
          Сайт временно недоступен
        </h1>
        <p className="text-secondary mb-8">
          Ведутся технические работы. Мы уже занимаемся этим и скоро всё заработает — попробуйте обновить страницу через пару минут.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            <Icon name="RefreshCw" size={18} />
            Обновить страницу
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-card-foreground font-medium hover:bg-muted transition-colors"
          >
            На главную
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceUnavailable;
