import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm"

@Entity({name: 'cart_items'})
export class CartItems {
    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'product_id'})
    productId: number

    @Column({default: 0})
    quantity: number

    @Column({type: 'decimal', precision: 5, scale: 2, default: 0})
    price: number

    @Column({name:'gift_wrapping', default: 0})
    giftWrapping: number

    @Column({name:'wrapping_type'})
    wrappingType: string | null

    @Column({name:'session_id'})
    sessionId: string
}