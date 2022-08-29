import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm"
import { ProductType } from "./product-type.entity"

@Entity({name: 'products'})
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({name: 'short_description'})
    shortDescription: string

    @Column({name: 'product_type_id', default: 1})
    productTypeId: number

    @Column({type: 'decimal', precision: 5, scale: 2, default: 0})
    price: number

    @Column({name: 'minimum_quantity', default: 0})
    minimumQuantity: number

    @ManyToOne(() => ProductType, (productType) => productType.id)
    productType: ProductType
}