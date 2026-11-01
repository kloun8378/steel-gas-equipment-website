import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Icon from "@/components/ui/icon";

export interface CompanyData {
  name: string;
  inn: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  profileType: 'company' | 'individual';
  fullName: string;
}

interface CompanyDataCardProps {
  companyData: CompanyData;
  onChange: (field: string, value: string) => void;
  onSave: () => void;
}

const CompanyDataCard = ({ companyData, onChange, onSave }: CompanyDataCardProps) => {
  const handleCompanyDataChange = onChange;
  const saveCompanyData = onSave;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Icon name="Building2" className="mr-2 h-5 w-5" />
          Контактная информация
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label className="mb-2 block">Тип клиента</Label>
          <RadioGroup
            value={companyData.profileType}
            onValueChange={(value) => handleCompanyDataChange('profileType', value)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            <label
              htmlFor="profile-individual"
              className={`flex items-center gap-3 border rounded-lg p-3 cursor-pointer transition-colors ${companyData.profileType === 'individual' ? 'border-primary bg-primary/5' : 'border-gray-200'}`}
            >
              <RadioGroupItem value="individual" id="profile-individual" />
              <div>
                <div className="font-medium flex items-center gap-2">
                  <Icon name="User" className="h-4 w-4" />
                  Физическое лицо
                </div>
                <p className="text-xs text-gray-500">Для частных покупателей</p>
              </div>
            </label>
            <label
              htmlFor="profile-company"
              className={`flex items-center gap-3 border rounded-lg p-3 cursor-pointer transition-colors ${companyData.profileType === 'company' ? 'border-primary bg-primary/5' : 'border-gray-200'}`}
            >
              <RadioGroupItem value="company" id="profile-company" />
              <div>
                <div className="font-medium flex items-center gap-2">
                  <Icon name="Building2" className="h-4 w-4" />
                  Юридическое лицо
                </div>
                <p className="text-xs text-gray-500">Для компаний и ИП</p>
              </div>
            </label>
          </RadioGroup>
        </div>

        {companyData.profileType === 'individual' ? (
          <div>
            <Label htmlFor="full-name">ФИО</Label>
            <Input
              id="full-name"
              value={companyData.fullName}
              onChange={(e) => handleCompanyDataChange('fullName', e.target.value)}
              placeholder="Иванов Иван Иванович"
            />
          </div>
        ) : (
          <>
            <div>
              <Label htmlFor="company-name">Название предприятия</Label>
              <Input
                id="company-name"
                value={companyData.name}
                onChange={(e) => handleCompanyDataChange('name', e.target.value)}
                placeholder="ООО 'Ваша компания'"
              />
            </div>

            <div>
              <Label htmlFor="company-inn">ИНН</Label>
              <Input
                id="company-inn"
                value={companyData.inn}
                onChange={(e) => handleCompanyDataChange('inn', e.target.value)}
                placeholder="1234567890"
              />
            </div>
          </>
        )}

        <div>
          <Label htmlFor="company-address">Адрес</Label>
          <Input
            id="company-address"
            value={companyData.address}
            onChange={(e) => handleCompanyDataChange('address', e.target.value)}
            placeholder="г. Барнаул, ул. Примерная 1"
          />
        </div>

        <div>
          <Label htmlFor="company-phone">Телефон</Label>
          <Input
            id="company-phone"
            value={companyData.phone}
            onChange={(e) => handleCompanyDataChange('phone', e.target.value)}
            placeholder="+7 (999) 123-45-67"
          />
        </div>

        <div>
          <Label htmlFor="company-email">Email</Label>
          <Input
            id="company-email"
            value={companyData.email}
            onChange={(e) => handleCompanyDataChange('email', e.target.value)}
            placeholder="company@example.com"
          />
        </div>

        <div>
          <Label htmlFor="company-description">Адрес доставки</Label>
          <Textarea
            id="company-description"
            value={companyData.description}
            onChange={(e) => handleCompanyDataChange('description', e.target.value)}
            placeholder="Адрес для доставки заказов"
            rows={3}
          />
        </div>

        <Button onClick={saveCompanyData} className="w-full">
          <Icon name="Save" className="mr-2 h-4 w-4" />
          Сохранить данные
        </Button>
      </CardContent>
    </Card>
  );
};

export default CompanyDataCard;
