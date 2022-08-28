import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm"
import { ProductType } from "./product-type.entity"

@Entity({name: 'products'})
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({name: 'product_type_id', default: 1})
    productTypeId: number

    @Column({type: 'decimal', precision: 5, scale: 2, default: 0})
    price: number

    @Column({name: 'minimum_quantiry', default: 0})
    minimumQuantiry: number

    @ManyToOne(() => ProductType, (productType) => productType.id)
    productType: ProductType
}