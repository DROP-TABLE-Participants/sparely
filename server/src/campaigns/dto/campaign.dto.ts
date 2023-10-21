export interface Campaign {
	id:                      string;
	state:                   string;
	slug:                    string;
	title:                   string;
	essence:                 string;
	paymentReference:        string;
	targetAmount:            number;
	allowDonationOnComplete: boolean;
	currency:                string;
	startDate:               Date;
	endDate:                 null;
	createdAt:               Date;
	updatedAt:               Date;
	deletedAt:               null;
	campaignType:            CampaignType;
	beneficiary:             Beneficiary;
	coordinator:             Coordinator;
	organizer:               Coordinator;
	campaignFiles:           CampaignFile[];
	vaults:                  Vault[];
	summary:                 Summary;
	logo:					 string;
}

export interface Beneficiary {
	id:         string;
	type:       string;
	publicData: string;
	person:     Person;
	company:    null;
}

export interface Person {
	id:        string;
	firstName: string;
	lastName:  string;
	email?:    string;
}

export interface CampaignFile {
	id:       string;
	filename: string;
	role:     string;
}

export interface CampaignType {
	slug:     string;
	name:     string;
	category: string;
}

export interface Coordinator {
	id:     string;
	person: Person;
}

export interface Summary {
	reachedAmount:   number;
	currentAmount:   number;
	blockedAmount:   number;
	withdrawnAmount: number;
	donors:          number;
}

export interface Vault {
	id: string;
}
