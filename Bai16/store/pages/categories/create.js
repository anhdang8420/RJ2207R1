import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Layout from "../../components/layout";


export default function CategoryCreate() {

    return (
        <div>
            <Layout>
                <div>
                    <form>
                        <input placeholder="Enter the name of category" name="name" 
                        type="text"></input>
                        <br /><br />
                        <button type="submit">Thêm</button>
                    </form>
                </div>
            </Layout>
        </div>

    )
}