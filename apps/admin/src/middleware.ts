import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(req: NextRequest) {
    const token = req.cookies.get('jwt-init-admin')?.value;
    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
        throw new Error('JWT_SECRET is not defined');
    }

    if (!token) {
        return NextResponse.redirect(new URL('/admin/login', req.url));
    }

    if (token) {
        try {
            await jwtVerify(token, new TextEncoder().encode(jwtSecret));
        } catch (_: unknown) {
            return NextResponse.redirect(new URL('/admin/login', req.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/'],
};
