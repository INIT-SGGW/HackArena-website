import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(req: NextRequest) {
    const token = req.cookies.get('jwt')?.value
    const jwtSecret = process.env.JWT_SECRET

    if (!jwtSecret) {
        throw new Error('JWT_SECRET is not defined')
    }

    if (!token) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    if (token) {
        try {
            await jwtVerify(token, new TextEncoder().encode(jwtSecret))
        } catch (e) {
            return NextResponse.redirect(new URL('/login', req.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/konto/:path*'],
}