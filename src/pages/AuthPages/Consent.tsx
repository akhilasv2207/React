import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import ConsentForm from "../../components/auth/ConsentForm";

export default function ConsentPage() {
    return (
        <>
            <PageMeta
                title="Title"
                description="descriptioin"
            />
            <AuthLayout>
                <ConsentForm />
            </AuthLayout>
        </>
    );
}
