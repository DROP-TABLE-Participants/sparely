import { Request } from "express";
import { TokenPayload } from "google-auth-library";

export interface RequestWithAuth extends Request {
	user: TokenPayload;
	token: string;
	userId: string;
}