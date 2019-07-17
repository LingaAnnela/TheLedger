export interface Transaction {
   id?: string;
   name: string;
   amount: number;
   date: Date;
   interest?: number;
   notification: boolean;
   interval?: number;
   duration?: string;
   attachments?: string;
   payments: any[];
}