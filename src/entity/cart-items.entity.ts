import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm"
import { Product } from "./product.entity"

@Entity({name: 'cart_items'})
export class CartItems {
    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'product_id', default: 1})
    productId: number

    @Column({type: 'decimal', precision: 5, scale: 2, default: 0})
    price: number

    @Column({default: 0})
    quantity: number

    @Column({name:'session_id'})
    sessionId: string
}